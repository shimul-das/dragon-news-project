import React, { createContext } from 'react'
import { applyActionCode, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
export const authcontext=createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const user=null;
    const authinfo={
        user,

    }
  return (
    <authcontext.Provider value={authinfo}>
{
    children
}
    </authcontext.Provider>
  )
}

export default AuthProvider