import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import registerServiceWorker from "./registerServiceWorker";
import ListGroup from './components/listgroup';
import {BrowserRouter} from 'react-router-dom';



ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById("root"));

registerServiceWorker();
