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

  //new user sign up
  const signUpNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };
  // user profile update
  const userProfileUpdate = (displayName, photoURL) => {
   return updateProfile(auth.currentUser, {displayName, photoURL})
  }

  //user verify email
  const verifyUserEmail = () => {
   return sendEmailVerification(auth.currentUser)
  }

  // reset password 
  const resetUserPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  }

  // user log in
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  // user log out
  const logOutUser = () => {
    return signOut(auth);
  };

  // google sign in
  const googleSignIn = (googleProvider) => {
    return signInWithPopup(auth, googleProvider)
  }

  const githubSignIn = (githubProvider) => {
    return signInWithPopup(auth, githubProvider)
  }

  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubsCribe();
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
  };

  return (
    <UserAuthContext.Provider value={userInfo}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default AuthContext;
