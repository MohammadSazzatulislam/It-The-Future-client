import React, { useContext } from 'react';
import {  Navigate, useLocation} from 'react-router-dom';
import Loading from '../component/Loading/Loading';
import { UserAuthContext } from '../Context/AuthContext';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(UserAuthContext);
    const location = useLocation()

    if (loading) {
        return <Loading></Loading>
    }

    if (user?.uid) {
        return children
    }

      return <Navigate to="/login" state={{ from: location }} replace />
      
};

export default PrivateRoute;