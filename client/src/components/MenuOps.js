import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    width: 300,
    border: 100,
    borderRadius: 4,
    boxShadow: "0 3px 5px 2px rgba(25, 105, 135, .3)",
    color: "white",
    height: 300,
    padding: "30px 40px",
  },
}));

function MenuOps() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="text"
        size="large"
      >
        <Button>
          <a style={href} href="/pos">
            POS
          </a>
        </Button>
        <Button>
          <a style={href} href="/sells">
            SELLS
          </a>
        </Button>
        <Button>
          <a style={href} href="/transHistory">
            TRANSCTION HISTORY
          </a>
        </Button>
        <Button>
          <a style={href} href="/customerInfo">
            CUSTOMER INFO
          </a>
        </Button>
        <Button>
          <a style={href} href="/employee">
            EMPLOYEE INFO
          </a>
        </Button>
      </ButtonGroup>
    </div>
  );
}

const href = {
  color: "blue",
};

export default MenuOps;
