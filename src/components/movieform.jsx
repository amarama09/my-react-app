import React, { Component } from "react";
import Form from "./common/Form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import {getMovie,saveMovie} from '../services/fakeMovieService';

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    errors: {},
    options: getGenres()
  };

  schema = {
    _id:Joi.string(),
    title: Joi.string(),
    genreId: Joi.string(),
    numberInStock: Joi.number(),
    dailyRentalRate: Joi.number()
  };

  doSubmit = () => {
    console.log('doSubmit',this.state.data);  
    this.props.history.push("/");

    saveMovie(this.state.data);
  };

  movie=null
  componentWillMount(){
    const {id}=this.props.match.params
    this.movie= id !=="new"? getMovie(id):null;

    if (this.movie){
        this.setState({data:this.getData()})
    }
  }

  getData=()=>{
 
    console.log("Selected Movie",this.movie);
    const data={...this.state.data}
    data._id=this.movie._id;
    data.title= this.movie.title;
    data.genreId= this.movie.genre._id;
    data.numberInStock= this.movie.numberInStock;
    data.dailyRentalRate= this.movie.dailyRentalRate;
 
    console.log("Selected Movie",this.movie,data);
    return data;
  }


  render() {
    console.log("Rendering Movie Form");

    return (
      <React.Fragment>
                <h1>Movie Form : {this.props.match.params.id}</h1>

        <form id='movieForm' onSubmit={this.onSubmit}>


                {this.getInput("title", "Title")}
                {this.getSelect('genreId','Genre',this.state.options,this.state.genre)}

                <hr/>

                {this.getInput("numberInStock", "Number In Stock")}
                {this.getInput("dailyRentalRate", "Rate")}
                {this.getSubmitButton("Save")}


        </form>

      </React.Fragment>
    );
  }
}

export default MovieForm;
