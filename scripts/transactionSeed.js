const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/retailPOS");

const transactionSeed = [
  {
    dateAdded: new Date(Date.now()),
    transNum: "",
    employeeNum: "",
    items: [
      {
        name: "",
        price: "",
      },
    ],
    subTotal: 0,
    tax: 9.75,
    total: 0,
    payment: "",
  },
];

db.Transaction.countDocuments().then((count) => {
  console.log(count);
  if (count > 0) {
    console.log("transaction");
  } else {
    db.Transaction.collection
      .insertMany(transactionSeed)
      .then((data) => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
  }
});
