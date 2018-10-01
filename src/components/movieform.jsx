import React, { Component } from "react";
import Form from "./common/Form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { getGenres } from "../services/genreService";
import { getMovie, saveMovie, updateMovie } from "../services/movieService";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    errors: {},
    options: []
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string(),
    genreId: Joi.string(),
    numberInStock: Joi.number(),
    dailyRentalRate: Joi.number()
  };

  doSubmit() {
    console.log("doSubmit", this.state.data);

    if (!this.movie) {
      saveMovie(this.state.data)
        .then(response => {
          this.props.history.push("/");
        })
        .catch(error => toast.error("ERROR Saving", error));
    } else {
      updateMovie(this.state.data)
        .then(response => this.props.history.push("/"))
        .catch(error => toast.error("Error Updating"+error.response.data));
    }
  }

  movie = null;
  async componentWillMount() {
    const { id } = this.props.match.params;

    if (id !== "new") {
      getMovie(id)
        .then(async data => {
          this.movie = data;
          this.setState({ data: this.getData(), options: await getGenres() });
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            toast.error(error.response.data);
            this.props.history.replace("/not-found");
          }
        });
    }

    if (id === "new") {
      this.setState({ options: await getGenres() });
    }
  }

  getData = () => {
    console.log("Selected Movie", this.movie);
    const data = { ...this.state.data };
    data._id = this.movie._id;
    data.title = this.movie.title;
    data.genreId = this.movie.genre._id;
    data.numberInStock = this.movie.numberInStock;
    data.dailyRentalRate = this.movie.dailyRentalRate;

    console.log("Selected Movie", this.movie, data);
    return data;
  };

  render() {
    console.log("Rendering Movie Form");

    return (
      <React.Fragment>
        <h1>Movie Form : {this.props.match.params.id}</h1>

        <form id="movieForm" onSubmit={this.onSubmit}>
          {this.getInput("title", "Title")}
          {this.getSelect(
            "genreId",
            "Genre",
            this.state.options,
            this.state.genre
          )}

          <hr />

          {this.getInput("numberInStock", "Number In Stock")}
          {this.getInput("dailyRentalRate", "Rate")}
          {this.getSubmitButton("Save")}
        </form>
      </React.Fragment>
    );
  }
}

export default MovieForm;
