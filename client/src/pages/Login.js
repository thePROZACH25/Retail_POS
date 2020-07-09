import React, { Component } from "react";
import GreetingMessage from "../components/Greeting/GreetingMessage";
import LoginPage from "../components/LoginPage/LoginPage";
import "./Styles/style.css"

class Login extends Component {
  render() {
    return (
      <container className="box1">
        <GreetingMessage /> 
        <LoginPage />
      </container>
    );
  }
}

export default Login;
