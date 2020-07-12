const axios = require("axios");
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/retailPOS");

const url = "https://fakestoreapi.com/products";

axios.get(url).then(function (res) {
  const data = res.data;
  for (let i = 0; i < data.length; i++) {
    const productSeed = [
      {
        id: data[i].id,
        title: data[i].title,
        price: data[i].price,
        category: data[i].category,
        description: data[i].description,
        image: data[i].image,
      },
    ];

    db.Product.countDocuments().then(count => {
      console.log(count)
      if(count> 0){
        console.log("product")
      }else{
        
        db.Product.collection.insertMany(productSeed)
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
    
    
  }
});
