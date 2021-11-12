import React, { useRef, useState } from 'react';
import { signup, useAuth, logout, login } from "../firebase";
import { Link } from "react-router-dom";
import HeaderNoLink from '../components/HeaderNoLink';
import ModalLogin from '../components/ModalLogin';
import CustomAlert from '../components/CustomAlert';

export default function LoginOrSignup() {

    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();



    const handleSignUp = async () => {
        setLoading(true)
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert('Error in signup, is the email already registered?')
        }
        setLoading(false);
    }

    const handleLogOut = async () => {
        setLoading(true)
        try {
            await logout();
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    const handleLogin = async () => {
        setLoading(true)
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert('Error in signup, is the email already registered?')
        }
        setLoading(false);
    }


    return (

            <div id='main'>
                <HeaderNoLink />

                  

            </div>

    );
}