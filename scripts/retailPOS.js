const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/retailPOS");



const employeeSeed = [
  {
    name: "Zach Ledford",
    employeeNum: "2518990",
    password: "1990",
    gradeLv: "3",
    dateAdded: new Date(Date.now()),
  },
  {
    name: "Skylar Patton",
    employeeNum: "0651170",
    password: "1234",
    gradeLv: "2",
    dateAdded: new Date(Date.now()),
  },
  {
    name: "Ella Field",
    employeeNum: "1115738",
    password: "5678",
    gradeLv: "1",
    dateAdded: new Date(Date.now()),
  },
  {
    name: "Harvie Moody",
    employeeNum: "8825014",
    password: "5678",
    gradeLv: "1",
    dateAdded: new Date(Date.now()),
  },
  {
    name: "Tiago Herrera",
    employeeNum: "7892455",
    password: "7890",
    gradeLv: "1",
    dateAdded: new Date(Date.now()),
  },
];

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

const transactionSeed = [
  {
    dateAdded: new Date(Date.now()),
    transNum: "",
    employeeNum: employeeSeed[0].employeeNum,
    items: [
      {
        name: "",
        price: "",
      }
    ],
    subTotal: 0,
    tax: 9.75,
    total: 0,
    payment: "",
  },
];

db.Employee.countDocuments().then(count => {
  console.log(count)
  if(count> 0){
    console.log("employee")
  }else{
    // db.Employee.remove({})
    // .then(() =>
    db.Employee.collection.insertMany(employeeSeed)
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

db.Customer.remove({})
  .then(() => db.Customer.collection.insertMany(customerSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Transaction.remove({})
  .then(() => db.Transaction.collection.insertMany(transactionSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
