import React, { useEffect, useState } from "react";
import { doc, getDoc, deleteDoc } from "@firebase/firestore";
import { useAuth, db } from "../firebase";
import Header from "../components/Header";
import { Avatar, Paper, Typography, Box, Divider } from '@material-ui/core';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GroupIcon from '@mui/icons-material/Group';
import { logout } from '../firebase';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import '../App.css';

export default function Profile() {
    const currentUser = useAuth();
    const [person, setPerson] = useState([]);
    const [notifs, setNotifs] = useState([]);
    const history = useHistory();

    const logoutF = async () => {
        try {
            await logout();
            history.push('/loggedout')
        } catch (error) {

        }

    }

    const getUserData = async () => {
        try {
            console.log("getting user data for user " + currentUser.uid)
            const docRef = doc(db, "users", currentUser.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setPerson(docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                throw new Error('No user')
            }
        } catch (error) {
            console.log(error)
        }

    }
    const getUserNotifs = async () => {
        try {
            const docRef = doc(db, "userNotifs", currentUser.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                const notificationArr = docSnap.data();
                const notifsArr = notificationArr.notifications;
                console.log(notifsArr.msg)
                setNotifs(notifsArr.msg);
            } else {
                // doc.data() will be undefined in this case
                setNotifs({
                    msg: ["no messages"],
                    senderID: ["no sender ids"]
                })
                console.log("No such document!");
                throw new Error("No document")
            }
        } catch (error) {
            console.log(error)
        }

    }
    const nav = () =>{
        history.push('/create')
    }

    const EmptyPage = () =>{
        return(
            <div>
                <header className="App-header">
                    <Typography variant="h3">This is empty, because you have no profile</Typography>
                    <Button onClick={nav}>Create profile</Button>
                </header>
            </div>
        );
    }

    useEffect(() => {
        if (currentUser) {
            getUserData();
            getUserNotifs();
        }
    }, [currentUser]);

    const deleteNotification = async (noti) => {
        alert("notification " + noti + " deleted")
    }

    return (
        <div>{person?.id
        ?<div>
         <Header />
            <div>
                <Button onClick={logoutF}>Kirjaudu ulos</Button>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
                    <Paper elevation={5} style={{ padding: 23, borderRadius: 23, marginTop: "5vh", flexDirection: 'column', width: '40em', display: 'flex' }}>
                        <Box style={{}}>
                            <h3 style={{ alignSelf: 'flex-start' }}>{person.name}</h3>
                            <Avatar alt={person.name} src={person.url} style={{ width: '8em', height: '8em' }} />

                            <Typography variant='h5'>Kuvaus: {person.bio}</Typography>
                        </Box>
                        <Divider />
                        <Box style={{}}>
                            <NotificationsActiveIcon />
                            <Typography variant='h5'>Ilmoitukset</Typography>
                            <div>{!notifs
                                ? notifs.map((noti) => (
                                    <Paper>
                                        <Typography variant='p'>{noti}</Typography>
                                        <DeleteIcon color='error' onClick={() => deleteNotification(noti)} />
                                    </Paper>
                                ))
                                : <Typography >Ei uusia ilmoituksia</Typography>
                            }
                            </div>
                            <SportsEsportsIcon />
                            <Typography variant='h5' style={{ margin: 10 }}>Lempi peli: {person.latestGame}</Typography>
                            <GroupIcon />
                            <Typography variant='h5'>Kavereita: 100</Typography>
                        </Box>
                    </Paper>

                </div>

            </div>
            </div>
            :<EmptyPage />
            
            }
           
        </div>
    );
}