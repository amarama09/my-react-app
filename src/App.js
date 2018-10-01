import React, { Component } from "react";
import MoviesGrid from "./components/moviesgrid";
import NavBar from "./components/navbar";
import Jambotron from './components/jumbotron';
import {Route,Redirect,Switch} from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import "./App.css";
import MovieForm from "./components/movieform";
import Login from './components/login';
import Register from './components/register';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import NotFound from './components/notfound';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer/>
        <Jambotron/>
        <NavBar />
        <main className="container">
        <Switch>
            <Route path='/rentals' component={Rentals}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/movie/:id' component={MovieForm}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/not-found' component={NotFound}/>
            <Redirect from='/movies' to='/'/>

            <Route path='/' component={MoviesGrid}/>

        </Switch>

        </main>
      </React.Fragment>
    );
  }
}

export default App;
