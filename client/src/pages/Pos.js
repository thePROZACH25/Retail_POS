import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Product from "../utils/Product";

import Grid from "@material-ui/core/Grid";
import SearchItem from "../components/SearchItem";
import TotalCard from "../components/TotalCard";
import PurcheseList from "../components/PurcheseList";
import CustomerCard from "../components/CustomerCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Pos() {
  const classes = useStyles();

  const [product, setProd] = useState(() => [
    {
      id: "",
      title: "",
      price: "",
      descripition: "",
      image: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const prod = {
      id: product.id,
    };
    console.log("prod", prod)
    const loadProduct = () => {
      Product.getProducts()
        .then((res) => {
          const data = res.data;
          console.log("Line 45 " + data);
          data.map((data) =>
            setProd({
              product: {
                id: data.name,
                title: data.title,
                price: data.price,
                descripition: data.descripition,
                image: data.image,
              },
            })
          );
        })
        .catch(() => {
          console.log("could not find data");
        });
    };
    loadProduct();
  };

  return (
    <div className="container" style={menu}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8} style={{ height: "20%" }}>
            <SearchItem submitItem={handleSubmit} />
          </Grid>
          <Grid item xs style={{ height: "300px" }}>
            <TotalCard />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid
            item
            xs={8}
            style={{
              height: "575px",
              position: "relative",
              top: "-210px",
            }}
          >
            <PurcheseList />
          </Grid>
          <Grid item xs style={{ height: "365px" }}>
            <CustomerCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const menu = {
  padding: "15px",
};

export default Pos;
