import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const UserAuthContext = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  //new user sign up
  const signUpNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };
  // user profile update
  const userProfileUpdate = (displayName, photoURL) => {
      setLoading(true)
   return updateProfile(auth.currentUser, {displayName, photoURL})
  }

  //user verify email
  const verifyUserEmail = () => {
      setLoading(true)
   return sendEmailVerification(auth.currentUser)
  }

  // reset password 
  const resetUserPassword = (email) => {
      setLoading(true)
    return sendPasswordResetEmail(auth, email);
  }

  // user log in
  const logInUser = (email, password) => {
      setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  };

  // user log out
  const logOutUser = () => {
      setLoading(true)
    return signOut(auth);
  };

  // google sign in
  const googleSignIn = (googleProvider) => {
      setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const githubSignIn = (githubProvider) => {
      setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }

   useEffect(() => {
     const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser);
       setLoading(false)
     })
     return () => unSubsCribe()
   }, []);

  const userInfo = {
    user,
    signUpNewUser,
    logInUser,
    logOutUser,
    userProfileUpdate,
    verifyUserEmail,
    resetUserPassword,
    googleSignIn,
    githubSignIn,
    loading,
    setLoading,
  };

  return (
    <UserAuthContext.Provider value={userInfo}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default AuthContext;
