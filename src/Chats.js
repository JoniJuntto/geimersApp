import React, { useEffect, useState } from "react";
import Header from "./Header";
import { collection, addDoc, setDoc, doc, getDoc, onSnapshot } from "@firebase/firestore";
import db from "./firebase";
import { signup, useAuth, logout, login } from "./firebase";

export default function Chats() {

   
    return (
        <div>
            <Header />
            <h1>Chats</h1>
            <p>Here should come all the people you have liked</p>
        </div>

    );
}