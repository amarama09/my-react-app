import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import { toast } from 'react-toastify';
import { registerUser } from "../services/userService";

import { login } from '../services/authService';


class Register extends Form {
  state = { data: { email: "", password: "", name: "" }, errors: null };

  schema = {
    email: Joi.string().email({ minDomainAtoms: 2 }),
    password: Joi.string().min(5).regex(/^[a-zA-Z0-9]{3,30}$/),
    name: Joi.string()
      .min(3)
      .max(30)
  };


  

  doSubmit() {
    registerUser(this.state.data)
      .then(response =>{
        toast.success('Registered')
        window.location='/'
        //this.props.history.push('/');
      })
      .catch(error => {             
        toast.info(error.response.data);
        const errors={...this.state.errors};
        errors.email=[error.response.data];
        this.setState({errors})
      });


  }
  render() {
    return (
      <React.Fragment>
        <form id="RegisterForm" onSubmit={this.onSubmit}>
          <h1>Register</h1>
          {this.getInput("email", "Email")}
          {this.getInput("password", "Password", "password")}
          {this.getInput("name", "Name")}
          {this.getSubmitButton("Register")}
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
