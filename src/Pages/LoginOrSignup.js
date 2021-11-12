import React, { useRef, useState } from 'react';
import { signup, useAuth, logout, login } from "../firebase";
import { Link } from "react-router-dom";
import HeaderNoLink from '../components/HeaderNoLink';
import SocialArray from '../components/SocialArray';
import ModalLoginBig from '../components/ModalLoginBig';


export default function LoginOrSignup() {

    return (
        <div id='main' >
            <HeaderNoLink />
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <ModalLoginBig />
            </div>
            <SocialArray />
        </div>

    );
}