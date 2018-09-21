import React, { Component } from "react";
import MoviesGrid from "./components/movies";


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
