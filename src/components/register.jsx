import React, { Component } from "react";
import Joi from 'joi-browser';
import Form from './common/Form';
class Register extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: null };

  schema = { username: Joi.string().email({ minDomainAtoms: 2 }), password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/), name: Joi.string().min(3).max(30) };
  
  doSubmit(){
      console.log("Register Form - SUBMITTED");
  }
  render() {
    return (
    
    <React.Fragment>
        <form  id='RegisterForm' onSubmit={this.onSubmit}>
                 <h1>Register</h1>
                 {this.getInput('username','Username')}
                 {this.getInput('password','Password','password')}
                 {this.getInput('name','Name')}
                 {this.getSubmitButton('Register')}
        </form>

    </React.Fragment>    


    );
  }
}

export default Register;
