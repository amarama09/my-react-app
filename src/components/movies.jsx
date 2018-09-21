import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Table from "./table";
import Paginator from './paginator';

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    const { length } = this.state.movies;

    if (length === 0) return <p>{this.getSummary()}</p>;

    return (
      <React.Fragment>
        <p>{this.getSummary()}</p>
        <Table
          data={this.state.movies}
          rowDelete={this.deleteMovie}
          handleLikeToggle={this.handleLikeToggle}
        />
        <Paginator
        totalItems={14}
        itemsPerPage={4}
        currentPage={1}
        handlePageClick={pageNum =>
          console.log("Page Number Clicked ", pageNum)
        }
      />
      </React.Fragment>
    );
  }

  deleteMovie = movie => {
    const movies = this.state.movies.filter(m => m !== movie);
    this.setState({ movies });
  };

  getSummary = () => {
    const NumOfMovies = this.state.movies.length;
    return NumOfMovies === 0
      ? `There are no movies in the database`
      : `There are ${NumOfMovies} in the Database`;
  };

  handleLikeToggle = movie => {


    const movies = [...this.state.movies]; 
    const idx = movies.indexOf(movie);
    movie.like ? (movie.like = 0) : (movie.like = 1);
    movies[idx] = {...movie};

    this.setState({ movies });
  };
}

export default Movies;
