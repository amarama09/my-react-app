import http from "./http";
import config from "../config.json";
import register from "../registerServiceWorker";

const userEndPoint = config.usersEndpoint;

export const registerUser = body => {
  return http
    .post(userEndPoint, body)
    .then(response => {
      localStorage.setItem("token", response.headers["x-auth-token"]);
      return response;
    })
    .catch(error => Promise.reject(error));
};
