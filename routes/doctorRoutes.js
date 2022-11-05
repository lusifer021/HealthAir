const express = require('express');
const {authDoctor, registerDoctor} = require('../controllers/doctorController');
const router = express.Router()
//post routing for creating a new user
router.route('/registerDoctor').post(registerDoctor)
//post routes for login a doctor
router.route('/loginDoctor').post(authDoctor)

module.exports = router