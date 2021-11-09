import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { collection, addDoc, setDoc, doc, getDoc } from "@firebase/firestore";
import db from './firebase';
import { Link } from "react-router-dom";
import { signup, useAuth, logout, login } from "./firebase";
import Header from "./Header";

export default function EditProf() {
    const currentUser = useAuth();
    const [name, setName] = useState('');
    const [url, setUrl] = useState('https://st2.depositphotos.com/5682790/10456/v/600/depositphotos_104564156-stock-illustration-male-user-icon.jpg');
    const [latestGame, setLatestGame] = useState('');
    const [bio, setBio] = useState('');
    const [person, setPerson] = useState([]);
    const newPenis = "hehehe";

    const handleNameChange = e => {
        setName(e.target.value)
    };
    const handleUrlChange = e => {
        setUrl(e.target.value)
    };
    const handleGameChange = e => {
        setLatestGame(e.target.value)
    };
    const handleBioChange = e => {
        setBio(e.target.value)
    };

    const getUserData = async () => {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setPerson(docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            alert('EI KÄYTTÄJÄÄ');
        }
    }

    /* THIS IS HOW I GET THE USER DATA TO WORK <3 */
    const handleNew = async () => {
        getUserData()
        const docRef = doc(db, "users", currentUser.uid);
        const payload = {
            bio:person.bio,
            latestGame:person.latestGame,
            name:person.name,
            url:person.url,

        };
        console.log(payload);
        await setDoc(docRef, payload);
    }


    return (
        <div>
            <Header />
            <h1>Update profile</h1>
            <h1>Name</h1>
            <TextField value={name} variant='outlined' onChange={handleNameChange} />
            <h1>Photo url</h1>
            <TextField value={url} variant='outlined' onChange={handleUrlChange} />
            <h1>Favorite game</h1>
            <TextField value={latestGame} variant='outlined' onChange={handleGameChange} />
            <h1>Biography</h1>
            <TextField value={bio} variant='outlined' onChange={handleBioChange} />
            <h1></h1>
            <Link to="/home">
                <Button onClick={handleNew}>Submit</Button>
            </Link>
        </div>
    );
}