const express = require('express')
const controllers = require('../controllers/client.controller')
const router = express.Router()

router.get('/', controllers.findAll)
router.post('/add', controllers.insert)
router.get('/:id', controllers.findOne)
router.post('/login', controllers.login)
router.delete('/delete/:id', controllers.delete)

module.exports = router