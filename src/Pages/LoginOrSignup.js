import React, { useRef, useState } from 'react';
import { signup, useAuth, logout, login } from "../firebase";
import HeaderHome from '../components/HeaderHome';
import SocialArray from '../components/SocialArray';
import ModalLoginBig from '../components/ModalLoginBig';
import background from '../assets/background.jpg'
import { Typography } from '@material-ui/core';
import '../styles.css/LoginOrSignUp.css';
import loginButton from '../assets/loginbutton.png'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function LoginOrSignup() {

    const notify = (text, state) =>{
        if(state === 'success'){
          toast.success(text)
        }else if(state === 'error'){
        toast.error(text);
        }
      }
    
      const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        try {
          await signInWithPopup(auth, provider);
          notify('Login success', 'success');
        }
        catch (error) {
          const errorMessage = error.message;
          notify(`Error in login ${errorMessage}`, 'error')
        }
      }
    

    return (

        <div className="LoginOrSignUp">
            <HeaderHome />
            <div>
                <ToastContainer />
                <div style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <Typography style={{marginBottom: '50px'}} variant='h4'>Löydä peliseuraa omiin lempipeleihin!</Typography>
                    <ModalLoginBig />
                    <Typography variant='h3'>Tai</Typography>
                    <img src={loginButton} onClick={signInWithGoogle}/>
                </div >
                <SocialArray />
            </div>
        </div>

    );
}