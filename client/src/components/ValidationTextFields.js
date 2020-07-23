import React from "react";
// import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
import { signInUser } from "../authActions";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));

class ValidationTextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      employeeNum: "",
      password: "",
      gradeLv: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      employeeNum: this.state.employeeNum,
      password: this.state.password,
    };
    signInUser(user).then((res) => {
      console.log(res)
    });
  };
  render() {
    // const classes = useStyles();
    return (
      <form
        // className={classes.root}
        // onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="emplNum"
            onChange={this.handleChange}
            type="input"
            name="employeeNum"
            label="Employee #"
            value={this.state.employeeNum}
            variant="outlined"
          />
          <TextField
            id="password"
            onChange={this.handleChange}
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            variant="outlined"
          />
        </div>
        <Button variant="contained" id="button" onClick={this.handleSubmit}>
          Default
        </Button>
      </form>
    );
  }
}

// ValidationTextFields.propTypes = {
//   signInUser: PropTypes.func.isRequired,
// };

export default ValidationTextFields;
