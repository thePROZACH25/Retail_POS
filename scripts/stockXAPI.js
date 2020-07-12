const axios = require("axios");

const url = "https://fakestoreapi.com/products";

axios
  .get(url)
  .then(function (res) {
      const data = res.data;
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].title)  
    }
  })
  
