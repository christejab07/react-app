const clients = require("../models/client.model");

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
    password: req.body.password,
  });

  await client.save()
    .then(data => {
      res.send({
        message: "Client saved successfully",
        client: data,
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "An error was found.",
        error: err.message,
      });
    });
};
exports.findAll = async (req, res) => {
     try {
         const users = await clients.find();
         res.status(200).json(users);
     } catch(error) {
         res.status(404).json({message: error.message});
     }
 };
 exports.findOne = async (req, res) => {
     try {
         const user = await clients.findById(req.params.id);
         res.status(200).json(user);
     } catch(error) {
         res.status(404).json({ message: error.message});
     }
 };