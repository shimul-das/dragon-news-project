import React, { createContext, useEffect, useState } from 'react'
import { applyActionCode, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const authcontext=createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setuser]=useState(null);
    const [loading,setloading]=useState(true);
const createuser=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password);

}
const signIn=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)

}
const logout=()=>{
    setloading(true)
    return signOut(auth);
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
        console.log('logged in user inside the auth state observer', loggedUser)
        setuser(loggedUser)
        setloading(false)
    })
    return ()=>{
     unsubscribe();
    } ;
})
    const authinfo={
        user,
        createuser,
        signIn,
        logout,
        loading
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