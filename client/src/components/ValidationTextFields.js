import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function ValidationTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="emplNum"
          // onChange={this.handleChange}
          name="password"
          label="Employee #"
          value=""
          variant="outlined"
        />
        <TextField
          id="password"
          // onChange={this.handleChange}
          name="password"
          type="password"
          label="Password"
          value=""
          variant="outlined"
        />
      </div>
    </form>
  );
}

export default ValidationTextFields;
