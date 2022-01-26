import React, { useEffect, useState } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { useAuth, db } from "../firebase";
import Header from "../components/Header";
import { Paper } from '@material-ui/core';
import { Typography, Avatar, Divider } from "@mui/material";
import ModalSendNotif from "../components/ModalSendNotif";

export default function Profile() {
    const currentUser = useAuth();
    const [person, setPerson] = useState([]);
    const [likes, setLikes] = useState([]);


    const getUserData = async () => {
        console.log("getting user data for user " + currentUser)
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setPerson(docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    const getUserLikes = async () => {
        console.log("getting users likes data for user " + currentUser)
        const docRef = doc(db, "likes", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document likes data:", docSnap.data());
            const likes = docSnap.data();
            console.log(likes)
            setLikes(likes.liked);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    useEffect(() => {
        if (currentUser) {
            getUserData();
            getUserLikes();
        }
    }, [currentUser]);


    return (
        <div>{!likes
            ?<div>
                <h1>Hei!</h1>
            </div>
            :<div>
                <Header />
                { <div className="tinderCards__cardContainer">
                    { <div>{likes.map((like) => (
                        <div>
                        <Paper className="paper" style={{margin: 40}}>
                            <ModalSendNotif like={like}/>
                            <Typography variant='h4'> {like.name}</Typography>
                            <Avatar alt={like.name} src={like.url} style={{ width: '8em', height: '8em' }} />
                            <Typography variant='h6'> {like.bio}</Typography>
                        </Paper>
                        <Divider />
                        </div>
                    ))}
                    </div> }
                </div> }
            </div>
            }
        </div>  
    );
}