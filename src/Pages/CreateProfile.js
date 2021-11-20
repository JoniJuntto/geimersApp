import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { setDoc, doc } from "@firebase/firestore";
import { Link } from "react-router-dom";
import { useAuth, db } from "../firebase";
import { Avatar } from '@material-ui/core';

export default function CreateProfile() {
    const currentUser = useAuth();
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [latestGame, setLatestGame] = useState('');
    const [bio, setBio] = useState('');
    const photos = [
        "https://st2.depositphotos.com/5682790/10456/v/600/depositphotos_104564156-stock-illustration-male-user-icon.jpg",
        "https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZyUyMGxvZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1492044715545-15ddedd84e5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMGxvZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

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
            id:currentUser.uid,
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
        console.log(photo)
        setUrl(photo);
    }

/*     <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
 */

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
            <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
                {photos.map((photo) => (
                    <div onClick={() => pickedPhoto(photo)}>
                        <Avatar src={photo} style={{ width: '8em', height: '8em' }}/>
                    </div>
                ))}
            </div>

            <Link to="/home">
                <Button onClick={handleNew}>Submit</Button>
            </Link>
        </div>
    );
}