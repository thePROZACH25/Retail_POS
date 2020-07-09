import React from "react";
import "./style.css";

function LoginPage() {
  return (
    <form className="form-inline">
      <div className="form-group mb-2">
        <label for="employeeNum" className="sr-only">
          Employee Number
        </label>
        <input
          type="text"
          readonly
          className="form-control-plaintext"
          id="employeeNum"
          value="Enter Employee #"
        ></input>
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <label for="inputPassword2" className="sr-only">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword2"
          placeholder="Password"
        ></input>
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Confirm identity
      </button>
    </form>
  );
}

export default LoginPage;
