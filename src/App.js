import React, { Component } from "react";
import MoviesGrid from "./components/moviesgrid";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navbar";
import Jambotron from "./components/jumbotron";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieform";
import Login from "./components/login";
import Register from "./components/register";
import NotFound from "./components/notfound";
import {getUser} from './services/authService';
import ProtectedRoute from './components/common/protectedroute';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";


class App extends Component {
  state = {};

  componentDidMount() {
    this.setState({ user:getUser()});
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <Jambotron />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
            <ProtectedRoute
              path="/movie/:id"
              component={MovieForm}
            />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/movies" to="/" />

            <Route  path="/" component={MoviesGrid} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
