const express = require('express');
const router = express.Router();
const { validatorRegister, validatorLogin } = require('../validators/auth');
const { registerCtrl, loginCtrl } = require('../controllers/auth');

//TODO http://localhost:3001/api/auth/login
//TODO http://localhost:3001/api/auth/register

//register
router.post('/register', validatorRegister, registerCtrl);

//login
router.post('/login', validatorLogin, loginCtrl);

module.exports = router;