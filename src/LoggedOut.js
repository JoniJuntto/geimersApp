import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function LoggedOut(){
    return(
        <div>
            <Header />
            <p>Thank you for visiting! Youre now logged out</p>
            <Link to='/'>
                <button >Go back to login</button>
            </Link>
        </div>
    );
}