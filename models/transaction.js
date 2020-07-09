const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  transNum: {
    type: Number,
    required: true,
  },
  employeeNum: {
    type: Number,
    required: true,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
    },
  ],
  subTotal: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
