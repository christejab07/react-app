const clients = require("../models/client.model");
const jwt = require('jsonwebtoken');
const express = require('express')
const bcrypt = require('bcrypt')
exports.insert = async (req, res) => {
  if (
    !req.body.username &&
    !req.body.email &&
    !req.body.phoneNumber &&
    !req.body.password
  ) {
    console.log("Data to be inserted can not be empty!");
  }

const client = new clients({
  username: req.body.username,
  phoneNumber: req.body.phoneNumber,
  email: req.body.email,
  password: req.body.password
});

try {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(client.password, salt);
  client.password = hashedPassword;

  const savedClient = await client.save();
  res.status(201).send({
    message: "Client saved successfully",
    client: savedClient,
  });
} catch (err) {
  console.error(err);
  res.status(500).send({
    message: "An error was found.",
    error: err.message,
  });
}
}
exports.findAll = async (req, res) => {
  try {
    const users = await clients.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
exports.findOne = async (req, res) => {
  try {
    const user = await clients.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await clients.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Unknown email' });
  }
  try {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email entered doesn\'t match the password' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while comparing passwords.', error });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(201).json({ message: 'User logged in successfully', token });
  
}