import React, {useRef, useState} from 'react';
import { signup, useAuth, logout, login } from "./firebase";
import { Link } from "react-router-dom";
import HeaderNoLink from './HeaderNoLink';
import ModalLogin from './ModalLogin';
import CustomAlert from './CustomAlert';

export default function LoginOrSignup(){

    const [loading, setLoading] = useState(false);
    const [alertState, setAlertState] = useState({
        open: false, 
        textOnAlert: "",
        severityOfAlert: 'success'
    });
    const currentUser = useAuth();
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
            <HeaderNoLink />
            <ModalLogin alertState = {alertState} setAlertState={setAlertState}/>
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