import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let { user ,isLoading} = useAuth();
    
    if (isLoading) {
        return <Spinner animation="grow" variant="danger"/>;
    }

   return (
     <Route
       {...rest}
       render={({ location }) =>
         user.uid ? (
           children
         ) : (
           <Redirect
             to={{
               pathname: "/login",
               state: { from: location },
             }}
           />
         )
       }
     />
   );
};

export default PrivateRoute;