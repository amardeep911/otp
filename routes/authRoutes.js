const express = require("express");
const router = express.Router();
const otpController = require('../controller/otpGenerator')
router.get('/otp', otpController.otpGenerator )

module.exports = router;