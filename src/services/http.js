import http from 'axios'; 
import {toast} from 'react-toastify';
import logger from './logger.js';

http.interceptors.response.use(null, error=>{
    const expectedError=error.response && (error.response.status >= 400 && error.response.status <500);

    if (!expectedError)
          toast.error('An UNEXPECTED Error -')
          logger.capture(error, { extra: "UN-EXPECTED ERROR !"});
            
    return Promise.reject(error);      
} );

export default {
    get:http.get,
    put:http.put,
    post:http.post,
    delete:http.delete};