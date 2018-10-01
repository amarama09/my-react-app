import http from './http';
import config from '../config.json'

const endPoint= config.genresEndpoint;

  export function getGenres() {
    return http.get(endPoint).then(response=>response.data).catch(error=>error.data);
  }
  