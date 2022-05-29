import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from "../../../Firebase/firebase.init";
import axios from 'axios';

const Signup = () => {

    const notify = (toastError) => toast(toastError);
    
    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  

    const handleLogin = (e) => {
        e.preventDefault();
    const{email,password,confirmPassword}=e.target
if (password.value===confirmPassword.value){
   createUserWithEmailAndPassword(email.value, password.value);
}
else{
    toast.error('Password does not match')
}
     
    };

    useEffect(() => {
        if (hookError) {
            notify(hookError.message)
            
        }
    }, [hookError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
          axios.post('/jwt-generator', {  email: user.user.email})
            .then(res => {
              localStorage.setItem('token', res.data)
              axios.put("/user", {
                email: user.user.email 
              })
                .then(res => {
                  if (res.data) {
                    navigate(from, { replace: true });
    
                  }
                })
            })
        }
      }, [user])


    return (
        <div className="login-container container">
            <h1 className="login-title">Sign up</h1>
            <form onSubmit={handleLogin}>
                <input className="input  form-control" type="email " name='email' required placeholder="Your Email"  />
                
                <div className="relative">
                    <input className="input  form-control"  type='password' name='password' required placeholder="password" />
                </div>
                <input className="input  form-control" 
                    type="password" name='confirmPassword' required
                    placeholder="confirm password"
                    
                />
                <br></br>
                <button className="button" >Sign up</button>
                <ToastContainer />
            </form>
        </div>
    );
};

export default Signup;