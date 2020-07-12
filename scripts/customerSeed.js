const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/retailPOS");

const customerSeed = [
  {
    name: "",
    email: "",
    phoneNumber: "",
    coupons: [{}, {}],
    transactions: [],
    dateAdded: new Date(Date.now()),
  },
  {
    name: "",
    email: "",
    phoneNumber: "",
    coupons: [{}, {}],
    transactions: [],
    dateAdded: new Date(Date.now()),
  },
  {
    name: "",
    email: "",
    phoneNumber: "",
    coupons: [{}, {}],
    transactions: [],
    dateAdded: new Date(Date.now()),
  },
  {
    name: "",
    email: "",
    phoneNumber: "",
    coupons: [{}, {}],
    transactions: [],
    dateAdded: new Date(Date.now()),
  },
];

db.Customer.countDocuments().then((count) => {
  console.log(count);
  if (count > 0) {
    console.log("customer");
  } else {
    db.Customer.collection
      .insertMany(customerSeed)
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
