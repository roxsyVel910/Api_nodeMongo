const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/session');
const customHeader = require('../middleware/customHeader');
const {
  validatorCreateItem,
  validatorGetItem,
} = require('../validators/tracks');
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/tracks');
const checkRol = require('../middleware/role');

//getAll
router.get('/', authMiddleware, getItems);

//getItem
router.get('/:id', authMiddleware, validatorGetItem, getItem);

//createItem
router.post(
  '/',
  authMiddleware,
  checkRol(['admin', 'user']),
  validatorCreateItem,
  createItem
); //customHeader

//updateItem
router.put(
  '/:id',
  authMiddleware,
  validatorGetItem,
  validatorCreateItem,
  updateItem
);

//deleteItem
router.delete('/:id', authMiddleware, validatorGetItem, deleteItem);

module.exports = router;