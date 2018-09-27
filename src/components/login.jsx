import React from "react";
import Joi from "joi-browser";
import Form from './common/Form';
class Login extends Form {
  state = {
    data: {
      username: "Amarillo",
      password: "Lingineni",

    },
    errors: null
  };

  schema = {
    username: Joi.string().min(3),
    password: Joi.string().min(3),
  };

  doSubmit = () => {
    console.log("DOING SUBMIT");
  };


  render() {
    return (
      <form id="loginForm" onSubmit={this.onSubmit}>

        {this.getInput("username", "Username")}
        {this.getInput("password", "Password", "password")}
        {this.getSubmitButton("Submit")}
      </form>
    );
  }
}

export default Login;
