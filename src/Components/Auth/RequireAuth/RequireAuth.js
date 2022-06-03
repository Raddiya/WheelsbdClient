import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init'
import { Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { signOut } from 'firebase/auth';

const RequireAuth = ({ children }) => {
    // fire base
    const [user, loading, error] = useAuthState(auth);
    // location
    let location = useLocation();

    // error message
    useEffect(() => {
        if (error) {
            toast.error(error.message, { theme: "colored" })
        }
    }, [error])
    
    // loading spinner
    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }



    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;