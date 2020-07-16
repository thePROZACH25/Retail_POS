import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchItem from "../components/SearchItem";
import TotalCard from "../components/TotalCard"


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
            <SearchItem/>
          </Grid>
          <Grid item xs style={{ height: "300px"}}>
            <TotalCard />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid
            item
            xs={8}
            style={{
              height: "575px",
              background: "green",
              position: "relative",
              top: "-210px",
            }}
          >
            <Paper className={classes.paper}>Products</Paper>
          </Grid>
          <Grid item xs style={{ height: "365px", background: "purple" }}>
            <Paper className={classes.paper}>Customer Info</Paper>
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
