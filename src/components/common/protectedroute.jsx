import React from 'react';
import {getUser} from '../../services/authService';
import { Route,Redirect } from 'react-router-dom';


const ProtectedRoute = ({path,component:Component,render}) => {

    const user= getUser();
    return ( <Route

              path={path}

              render={(props)=>{
               return user? Component? <Component {...props}/>:render(props) :<Redirect to={{
                   pathname:'/login',state:{from:props.location}               
               }}/>
              }}
    
    
    
     /> );
}
 
export default ProtectedRoute;