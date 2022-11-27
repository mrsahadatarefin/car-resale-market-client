import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  //user create
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1 create user
  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  //2 singin user

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleProvider = new GoogleAuthProvider();

  const signINWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //3 sign out
  const logOut = () => {
    return signOut(auth);
  };

  //updateUser
  const updateUser = (userInfo) => {
    updateProfile(auth.currentUser, {
      displayName: userInfo.name,
    })
      .then(() => {
        return userInfo;
      })
      .catch((error) => {
         console.log(error)
      });
  };

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user observing");
      setUser(currentUser);
      if(currentUser?.email) {
         fetch(`http://localhost:5000/user?email=${currentUser?.email}`)
         .then(res => res.json())
         .then(data => {
            setUser(data)
         })
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    signIn,
    user,
    logOut,
    updateUser,
    signINWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
