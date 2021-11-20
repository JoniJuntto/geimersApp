import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { setDoc, doc } from "@firebase/firestore";
import { Link } from "react-router-dom";
import { useAuth, db } from "../firebase";
import { Avatar } from '@material-ui/core';
import { ImageList, ImageListItem } from "@material-ui/core";

export default function CreateProfile() {
    const currentUser = useAuth();
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [latestGame, setLatestGame] = useState('');
    const [bio, setBio] = useState('');
    const photos = [
        {
            title: 'Kuva',
            img: "https://st2.depositphotos.com/5682790/10456/v/600/depositphotos_104564156-stock-illustration-male-user-icon.jpg"
        },
        {
            title:"",
            img:"https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZyUyMGxvZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"",
            img:"https://images.unsplash.com/photo-1492044715545-15ddedd84e5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMGxvZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"",
            img:"https://images.unsplash.com/photo-1513807762437-8c8dee6b3776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"",
            img:"https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"",
            img:"https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"",
            img:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"",
            img:"https://images.unsplash.com/photo-1548484352-ea579e5233a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"",
            img:"https://images.unsplash.com/photo-1498736297812-3a08021f206f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"",
            img:"https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"",
            img:"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"",
            img:"https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"",
            img:"https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"",
            img:"https://images.unsplash.com/photo-1520092352425-9699926a9b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title:"",
            img:"https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
    ];

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

    /* THIS IS HOW I GET THE USER DATA TO WORK <3 */
    const handleNew = async () => {
        const docReflikes = doc(db, "likes", currentUser.uid);
        const payloadLikes = {
            //Here's the info of the other person
            id: currentUser.uid,
            liked: [
                "1."
            ]
        };
        await setDoc(docReflikes, payloadLikes);
        const docRef = doc(db, "users", currentUser.uid);
        const payload = {
            id: currentUser.uid,
            bio: bio,
            latestGame: latestGame,
            name: name,
            url: url,

        };
        console.log(payload);
        await setDoc(docRef, payload);
    }

    const pickedPhoto = (photo) => {
        console.log("picked")
        alert("Kuva valittu!")
        console.log(photo)
        setUrl(photo);
    }

    return (
        <div>
            <h1>Create profile</h1>
            <h1>Name</h1>
            <TextField value={name} variant='outlined' onChange={handleNameChange} />
            <h1>Favorite game</h1>
            <TextField value={latestGame} variant='outlined' onChange={handleGameChange} />
            <h1>Biography</h1>
            <TextField value={bio} variant='outlined' onChange={handleBioChange} />
            <h1>Pick a photo</h1>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {photos.map((item) => (
                    <ImageListItem key={item.img}>
                        <img onClick={()=>pickedPhoto(item.img)}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <Link to="/home">
                <Button onClick={handleNew}>Submit</Button>
            </Link>
        </div>
    );
}