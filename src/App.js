import React, { Component } from "react";
import MoviesGrid from "./components/moviesgrid";
import "./App.css";

class App extends Component {

  render() {
  
    return (          
    <main className="container">
    <MoviesGrid/>
    </main>
    );
  }
}

export default App;
