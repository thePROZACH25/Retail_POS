import React from "react";

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employeeNum: "", password: "" };
  }

  handleChange = (e) => {
    // console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="row d-flex justify-content-center">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group mb-2">
            <label htmlFor="employeeNum" className="sr-only">
              Employee Number
            </label>
            <input
              onChange={this.handleChange}
              name="employeeNum"
              type="text"
              className="form-control-plaintext"
              id="employeeNum"
              placeholder="Employee Number"
              value={this.state.employeeNum}
            />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputPassword2" className="sr-only">
              Password
            </label>
            <input
              onChange={this.handleChange}
              name="password"
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Password"
              value={this.state.password}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary mb-2">
              Confirm identity
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginInput;
