const express = require('express');
const router = express.Router();
const {validatorCreateItem} = require('../validators/tracks');
const {customHeader} = require('../middleware/customHeader');
const {getItems, getItem, createItem} = require('../controllers/tracks');



router.get('/', getItems) ;

router.post("/", validatorCreateItem, customHeader, createItem);



module.exports = router

