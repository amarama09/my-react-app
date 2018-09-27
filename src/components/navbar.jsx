import React from "react";
import { Link, Route } from "react-router-dom";
import register from "../registerServiceWorker";

const AddMovie = (
  <li className="nav-item">
    <Link to="/movie/new" className="nav-link">
      <button className="btn btn-warning text-white btn-sm">Add Movie</button>
    </Link>
  </li>
);

const NavBar = () => {
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
        <Route exact path="/" render={() => AddMovie} />
      </ul>

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
    </nav>
  );
};

export default NavBar;
