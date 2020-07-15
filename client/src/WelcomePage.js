import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ValidationTextFields from "./components/ValidationTextFields";

const useStyles = makeStyles({
  root: {
    width: 500,
    border: 100,
    borderRadius: 4,
    boxShadow: "0 3px 5px 2px rgba(25, 105, 135, .3)",
    color: "white",
    height: 100,
    padding: "0 30px",
  },
});

function WelcomePage() {
  const classes = useStyles();
  return (
    <div>
      <div style={box1}>
        <div style={box2}>
          <Typography align="center">
            <h3>Welcome</h3>
            <h5>Please Signin</h5>
          </Typography>
        </div>
        <Container className={classes.root}>
          <ValidationTextFields />
        </Container>
      </div>
    </div>
  );
}

const box1 = {
  padding: "20px",
};

const box2 ={
    padding: "20px"
}

export default WelcomePage;
