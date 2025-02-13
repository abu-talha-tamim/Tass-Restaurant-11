import React, { useContext } from 'react';
import AuthContext from '../Contex/AuthContex/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner loading-lg "></span>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={location?.pathname}></Navigate>
    
};

export default PrivateRout;