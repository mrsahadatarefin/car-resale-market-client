import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

 const AuthProvider = ({ children}) => {
   //user create 
   const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

   // 1 create user
    const createUser =  (email,password)=>{
    setLoading(true);

    
        return createUserWithEmailAndPassword(auth,email, password)
 }
 //2 singin user

 const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);

 }

 //3 sign out
 const logOut = ()=>{
    setLoading(true)
    return signOut(auth)

 }

 //updateUser
 const updateUser = (userInfo)=>{
   return updateProfile(user,userInfo) 

 }

 useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,currentUser=>{
        console.log('user observing')
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>unsubscribe();
 },
 [])

 
 
    const authInfo = {
        createUser,
        signIn,
        user,
        logOut ,
        updateUser,
        loading

    };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;
