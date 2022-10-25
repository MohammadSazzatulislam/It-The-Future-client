import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';

export const UserAuthContext = createContext()
const auth =getAuth(app)

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)
    

    


    const userInfo = {}

    return (
        <UserAuthContext.Provider value ={userInfo}>
            {children}
        </UserAuthContext.Provider>
    );
};

export default AuthContext;