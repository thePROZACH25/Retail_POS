import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
// import axios from "axios"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const ValidationTextFields = (props) => {
  const [value, setValue] = useState({
    name: "",
    employeeNum: "",
    password: "",
    gradeLv: "",
  });
  const classes = useStyles();

  const handleChange = (e) => {
    // console.log(e.target.name);
    setValue({
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const user = {
  //     employeeNum: value.employeeNum,
  //     password: value.password,
  //   }
  //   signinUser(user).then(res => {

  //   })
  // };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="emplNum"
          onChange={handleChange}
          name="employeeNum"
          label="Employee #"
          value={value.emloyeeNum}
          variant="outlined"
        />
        <TextField
          id="password"
          onChange={handleChange}
          name="password"
          type="password"
          label="Password"
          value={value.password}
          variant="outlined"
        />
      </div>
    </form>
  );
};

export default ValidationTextFields;
