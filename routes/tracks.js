const express = require('express');
const router = express.Router();
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks');

const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/tracks');



router.get('/', getItems) ;

router.get('/:id', getItem)
router.put(
    '/:id',
  
    validatorGetItem,
    validatorCreateItem,
    updateItem
  );
  
  //deleteItem
  router.delete('/:id',  validatorGetItem, deleteItem);

router.post("/", validatorCreateItem, createItem);



module.exports = router

