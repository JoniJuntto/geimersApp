import React, { useRef, useState } from 'react';
import { signup, useAuth, logout, login } from "../firebase";
import HeaderHome from '../components/HeaderHome';
import SocialArray from '../components/SocialArray';
import ModalLoginBig from '../components/ModalLoginBig';
import background from '../assets/background.jpg'
import { Button, Typography } from '@material-ui/core';
import '../styles.css/LoginOrSignUp.css';
import loginButton from '../assets/loginbutton.png'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";



export default function LoginOrSignup() {

    const history = useHistory();

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
          // eslint-disable-next-line no-restricted-globals
          history.push('/create');
          console.log(provider, auth)
        }
        catch (error) {
          const errorMessage = error.message;
          notify(`Error in login ${errorMessage}`, 'error')
        }
      }
    

    return (
        <div className="LoginOrSignUp">
            <div>
                <ToastContainer />
                    <Typography style={{marginBottom: '50px'}} variant='h4'>Löydä peliseuraa omiin lempipeleihin!</Typography>
                    <ModalLoginBig />
                    <Typography variant='h3'>Tai</Typography>
                    <Button onClick={signInWithGoogle}>Button</Button>
                </div >
        </div>

    );
}