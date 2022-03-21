import React from 'react';
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

function Login({ setIsAuth })
{
    let nevigate = useNavigate();
    const signInWithGoogle = () =>{
    signInWithPopup(auth, provider).then((result) =>{
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        nevigate("/");
    });
    };
    return(<div className='loginPage' >
    <p>Sign in with Google to continue</p>
    <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in with Google</button>
</div>)
}

export default Login;