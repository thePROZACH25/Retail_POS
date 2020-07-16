import React, { Component } from "react";
import GreetingMessage from "../components/GreetingMessage";
import LoginInput from "../components/LoginInput";
import "./Styles/style.css";

class Login extends Component {
  render() {
    return (
      <div className="container p-3 my-3 border col-10">
        <GreetingMessage />
        <LoginInput />
      </div>
    );
  }
}

export default Login;
