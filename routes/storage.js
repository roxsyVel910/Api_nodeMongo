 const multer = require('multer');
const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');




router.post("/", uploadMiddleware.single("myfile"));

module.exports = router;