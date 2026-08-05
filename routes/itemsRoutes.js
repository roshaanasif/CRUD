const express = require('express');
const router = express.Router();
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/itemControllers');

// Chained routes matching '/'
router.route('/')
  .get(getItems)
  .post(createItem);

// Chained routes matching '/:id'
router.route('/:id')
  .get(getItem)
  .put(updateItem)
  .delete(deleteItem);

module.exports = router;