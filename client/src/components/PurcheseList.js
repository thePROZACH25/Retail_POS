import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PurcheseItem from "../components/PurcheseItem"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: "100%",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function PurcheseList() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Purchese Items
        </Typography>
        <hr />
        <PurcheseItem />
      </CardContent>
    </Card>
  );
}

export default PurcheseList;
