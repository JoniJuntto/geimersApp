import { async } from '@firebase/util';
import React, {useRef, useState} from 'react';
import { signup, useAuth, logout, login } from "./firebase";
import { collection, addDoc, setDoc, doc } from "@firebase/firestore";
import db from './firebase';
import { Link } from "react-router-dom";
import Header from './Header';

export default function LoginOrSignup(){

    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const [name, setName] = useState('');
    const [url, setUrl] = useState('https://st2.depositphotos.com/5682790/10456/v/600/depositphotos_104564156-stock-illustration-male-user-icon.jpg');
    const [latestGame, setLatestGame] = useState('');
    const [bio, setBio] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();


    const handleSignUp = async () =>{
        setLoading(true)
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert('Error in signup, is the email already registered?')
        }
        setLoading(false);
    }
    
    const handleLogOut = async () =>{
        setLoading(true)
        try {
            await logout();
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    const handleLogin = async () =>{
        setLoading(true)
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert('Error in signup, is the email already registered?')
        }
        setLoading(false);
    }


    return(
        <div id='main'>
            <Header />
            {/* THIS IS HOW I GET USER ID */}
            <div id='fields'>
                <input ref={emailRef} placeholder='Email' />
                <p>Password must be atleast 6 characters</p>
                <input ref={passwordRef} type='password' placeholder='Password'/>
            </div>
            <Link to='/create'>
            <button disabled={ loading || currentUser } onClick={handleSignUp}>Sign Up</button>
            </Link>
            <Link to="/loggedout" >
            <button disabled={ loading || ! currentUser } onClick={handleLogOut}>Log out</button>
            </Link>
            <Link to='/home'>
                <button disabled={ loading || currentUser || !emailRef} onClick={handleLogin}>Login</button>
            </Link>

        </div>
    );
}