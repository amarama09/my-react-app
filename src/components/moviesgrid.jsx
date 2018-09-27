import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Table from "./table";
import Paginator from "./paginator";
import ListGroup from "./listgroup";
import _ from "lodash";
import { getGenres } from "../services/fakeGenreService";
import Like from "./like";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchbox";

class MoviesGrid extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageNum: 1,
    itemActive: { _id: 1, name: "All Genre" },
    itemsPerPage: 4,
    sortObj: { name: "title", order: "asc" }
  };
  columns = [
    {
      name: "title",
      label: "Title",
      component: row => <Link to={`/movie/${row._id}`}>{row.title}</Link>
    },
    { name: "genre.name", label: "Genre" },
    { name: "numberInStock", label: "Stock" },
    { name: "dailyRentalRate", label: "Rate" },
    {
      name: "like",
      component: row => (
        <Like
          liked={row.like}
          handleLikeToggle={this.handleLikeToggle}
          obj={row}
        />
      )
    },
    {
      name: "delete",
      component: row => (
        <button
          className="btn btn-secondary text-light btn-small"
          onClick={() => this.deleteMovie(row)}
        >
          x
        </button>
      )
    }
  ];
  moviesToPresent() {
    return this.paginate(this.sortMovies(this.filterMovies()));
  }

  sortMovies(movieList) {
    return _.orderBy(
      movieList,
      [this.state.sortObj.name],
      [this.state.sortObj.order]
    );

    /* const sortedMovies= movieList.sort((movie1, movie2) => {

      let m1 = _.get(movie1,this.state.sortObj.name);
      let m2 = _.get(movie2,this.state.sortObj.name);

      if(typeof m1==='string'){
        m1=m1.toUpperCase();
        m2=m2.toUpperCase();
 
       console.log(m1,m2,this.state.sortObj.order)
     
         if (this.state.sortObj.order === "asc") {
            return m1.localeCompare(m2);
         }
         return ((-1) * m1.localeCompare(m2));
 
      }

      if(this.state.sortObj.order === "asc"){
        return  m1-m2;

      } else{
        return m2-m1;
      }  

    });

    console.log('Sorted ',this.state.sortObj.order, sortedMovies);
    return sortedMovies
    */
  }

  paginate(movieList) {
    const { pageNum, itemsPerPage } = this.state;
    const leftIndex = (pageNum - 1) * itemsPerPage;
    const rightIndex = leftIndex + itemsPerPage;
    return movieList.slice(leftIndex, rightIndex);
  }

  filterMovies() {
    if (this.state.itemActive._id === 1) return this.state.movies;
    return this.state.movies.filter(
      movie => movie.genre._id === this.state.itemActive._id
    );
  }

  handleSearch = searchTerm => {
    const movieResults = getMovies().filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    this.setState({
      movies: movieResults,
      itemActive: { _id: 1, name: "All Genre" },
      currentPage: 1
    });
  };

  render() {
    const { length } = this.state.movies;
    const AllGenre = { _id: 1, name: "All Genre" };

    if (length === 0) return <p>{this.getSummary()}</p>;

    return (
      <React.Fragment>
        <p>{this.getSummary()}</p>
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={[AllGenre, ...this.state.genres]}
              itemActive={this.state.itemActive}
              onItemSelect={itemObj => {
                const itemActive = { ...itemObj };
                this.setState({ itemActive, pageNum: 1 });
              }}
            />
          </div>
          <div className="col">
            <SearchBox handleSearch={this.handleSearch} />

            <Table
              rows={this.moviesToPresent()}
              columns={this.columns}
              columnSort={this.handleColumnSort}
              sortObj={this.state.sortObj}
            />
            <Paginator
              totalItems={this.filterMovies().length}
              itemsPerPage={this.state.itemsPerPage}
              currentPage={this.state.pageNum}
              handlePageClick={pageNum => {
                const newPageNum = pageNum;
                this.setState({ pageNum: newPageNum });
              }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleColumnSort = col => {
    console.log("Clicked", col);
    this.setTableSortObject(col);
  };

  setTableSortObject(colName) {
    const sortObj = { name: colName, order: "asc" };

    if (this.state.sortObj.name === colName) {
      sortObj.order = this.state.sortObj.order === "asc" ? "desc" : "asc";
    }

    this.setState({ sortObj });
  }

  deleteMovie = movie => {
    const movies = this.state.movies.filter(m => m !== movie);
    const pageNum =
      this.state.pageNum > 1 && movies.length % this.state.itemsPerPage === 0
        ? this.state.pageNum - 1
        : this.state.pageNum;

    this.setState({ movies, pageNum });
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
    movies[idx] = { ...movie };

    this.setState({ movies });
  };
}

export default MoviesGrid;
