const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add an item name'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    price: {
      type: Number,
      required: [true, 'Please specify a price'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', ItemSchema);