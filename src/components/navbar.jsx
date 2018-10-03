import React from "react";
import { Link, Route } from "react-router-dom";
import register from "../registerServiceWorker";
import {logout} from '../services/authService';

const AddMovie = (
  <li className="nav-item">
    <Link to="/movie/new" className="nav-link">
      <button className="btn btn-warning navbar-brand text-white ">Add Movie</button>
    </Link>
  </li>
);

const authenticatedMenu=(user) => (
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">{user && <button className="btn navbar-brand btn-secondary text-white  m-2">{user.name}</button>}</li>

    <li className="nav-item">
      <button onClick={()=>{logout();window.location='/'}
    } className="btn btn-primary navbar-brand text-white  m-2">LogOut</button>
    </li>
  </ul>
);

const notAutheticatedMenu = (
  <ul className="navbar-nav ml-auto">

    <li className="nav-item">
      <Link to="/register" className="nav-link">
        Register
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/login" className="nav-link">
        Login
      </Link>
    </li>
  </ul>
);



const NavBar = ({ user }) => {
  console.log("rendering NavBar");
  return (
    <nav className="navbar navbar-expand-md bg-light text-dark sticky-top">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <strong>Vidly</strong>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/movies" className="nav-link">
            Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/customers" className="nav-link">
            Customers
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/rentals" className="nav-link">
            Rental
          </Link>
        </li>
        {user &&  user.isAdmin && <Route exact path="/" render={() => AddMovie} />}
      </ul>



      {user ? authenticatedMenu(user) : notAutheticatedMenu}
    </nav>
  );
};

export default NavBar;
