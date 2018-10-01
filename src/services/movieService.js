import http from './http';
import config from '../config.json'

const endPoint= config.moviesEndpoint;

  const movieUrl=(id)=>{

    return `${endPoint}/${id}`;
  }
  

  export function getMovies() {
    return http.get(endPoint).then(response=>response.data).catch(error=>Promise.reject(error));
  }
  
  export function getMovie(id) {
    return http.get(movieUrl(id)).then(response=>response.data).catch(error=>Promise.reject(error));
  
  }
  export function saveMovie(movie) {

    return http.post(endPoint,movie).then(response=>response.data).catch(error=>Promise.reject(error));
  }

  export function updateMovie(movie){
    const id = movie._id
    const body={...movie};
    delete body._id;
    return http.put(movieUrl(id),body).then(response=>response.data).catch(error=>Promise.reject(error));
  }
  
  export function deleteMovie(id) {

    return http.delete(movieUrl(id)).then(response=>response.data).catch(error=>Promise.reject(error));

  }
  