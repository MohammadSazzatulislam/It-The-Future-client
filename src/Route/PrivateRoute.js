import React, { useContext } from 'react';
import {  Navigate, useLocation} from 'react-router-dom';
import { UserAuthContext } from '../Context/AuthContext';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(UserAuthContext);
    const location = useLocation()

    if (loading) {
        return (
          <div className="flex justify-center items-center mx-auto h-screen w-full">
            <div className="w-16 h-16 border-8 border-dotted rounded-full animate-spin dark:border-violet-400"></div>
          </div>
        );
    }

    if (user?.uid) {
        return children
    }

      return <Navigate to="/login" state={{ from: location }} replace />
      
};

export default PrivateRoute;