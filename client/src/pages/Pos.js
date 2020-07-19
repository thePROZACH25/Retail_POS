import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

  return (
    <div className="container" style={menu}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8} style={{ height: "20%" }}>
            <SearchItem />
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
