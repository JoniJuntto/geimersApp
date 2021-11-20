import React, { useRef, useState } from 'react';
import { signup, useAuth, logout, login } from "../firebase";
import HeaderHome from '../components/HeaderHome';
import SocialArray from '../components/SocialArray';
import ModalLoginBig from '../components/ModalLoginBig';
import background from '../assets/background.jpg'
import { Typography } from '@material-ui/core';
import '../styles.css/LoginOrSignUp.css';



export default function LoginOrSignup() {

    return (

        <div className="LoginOrSignUp">
            <HeaderHome />
            <div>
                <div style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <Typography style={{marginBottom: '50px'}} variant='h4'>Löydä peliseuraa omiin lempipeleihin!</Typography>
                    <ModalLoginBig />
                </div >
                <SocialArray />
            </div>
        </div>

    );
}