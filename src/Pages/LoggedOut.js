import React from "react";
import { Link } from "react-router-dom";
import HeaderNoLink from '../components/HeaderNoLink';

export default function LoggedOut(){
    return(
        <div>
            <HeaderNoLink />
            <p>Thank you for visiting! Youre now logged out</p>
            <Link to='/'>
                <button >Go back to login</button>
            </Link>
        </div>
    );
}