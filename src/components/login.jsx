import React from "react";
import Joi from "joi-browser";
import { Redirect } from 'react-router-dom';
import Form from './common/Form';
import {login, getUser} from '../services/authService';


class Login extends Form {
  state = {
    data: {
      username: "amarillo@gmail.com",
      password: "lingineni",

    },
    errors: null
  };

  schema = {
    username: Joi.string().min(3),
    password: Joi.string().min(3),
  };

  doSubmit = () => {
    console.log("DOING SUBMIT");

    const body={

      email:this.state.data.username,
      password:this.state.data.password

    }

 
    
    login(body).then(response=>{

      const {state}=this.props.location

      if  (state){
        window.location=state.from.pathname
      }else{
        window.location='/'
      }
      



      //this.props.history.replace('/')
      
    }).catch((error)=>{

      if (error.response && error.response.status===400){
        const message =[error.response.data]
        const errors= {...this.state.errors}
        errors.username=message;
  
        this.setState({errors});
      }


   });;

  };


  render() {
    if (getUser()) return <Redirect to='/'/>

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
