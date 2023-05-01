import React, { useContext, useState } from 'react'
import { authcontext } from '../Providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authcontext)
    const location=useLocation()
    console.log(location);
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login'></Navigate>
  return (
    <div>

    </div>
  )
}

export default PrivateRoute

/***
 * ---------------------
 * Steps
 * ---------------------
 * 1) Check user loogedin or not.
 * 2) Though user is looged in, then allow them to visit the route.
 * 3) Else redirect the user to the login page.
 * 4) Setup the private route
 * 5) Handle Loading
 */