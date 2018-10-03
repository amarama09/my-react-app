import http from "./http";
import config from "../config.json";
import jwtDecode from 'jwt-decode';

const endpoint = config.authEndpoint;

http.setJWT(localStorage.getItem('token'));

export const login = body => {
  return http
    .post(endpoint, body)
    .then(response => {
        
        localStorage.setItem('token',response.data)
        
        return response})
    .catch(error => Promise.reject(error));
};

export const logout=()=>{
           localStorage.removeItem('token')
}

export const getUser=()=>{
 
    const jwt = localStorage.getItem('token')

    if(jwt) return jwtDecode(jwt)
    return null
}



