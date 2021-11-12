import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { useAuth, db } from "../firebase";
import { doc, getDoc, setDoc } from "@firebase/firestore";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ModalSendNotif(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState(0);
    const [message, setMessage] = useState('');
    const [senderIDs, setSenderIDs] = useState([])
    const [oldMessages, setOldMessages] = useState([]);
    const like = props.like;
    const currentUser = useAuth();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getUserNotifs = async (userId) => {
        console.log("getting users notif data for user " + userId)
        const docRef = doc(db, "userNotifs", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document likes data:", docSnap.data());
            const notifs = docSnap.data();
            console.log(notifs)
            const senderIDArr = notifs.senderID;
            const oldMessagesArr = notifs.msg;
            setOldMessages(oldMessagesArr);
            console.log(oldMessagesArr)
            setSenderIDs(senderIDArr);
            console.log(senderIDArr)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const handleNotif = async () => {
        handleClose()
        alert("Viesti lähetetty!")
        const likeID = props.like.id;
        getUserNotifs(likeID)
        const docRef = doc(db, "userNotifs", likeID);
        const uidU = currentUser.uid
        let payload;
        if (senderIDs && oldMessages) {
            payload = {
                //mitä jos tyhänä array?
                notifications: {
                    senderID: [...senderIDs, uidU],
                    msg: [...oldMessages, message]

                }
            }
        } else {
            payload = {
                notifications: {
                    senderID: uidU,
                    msg: message
                }
            }
        };
        await setDoc(docRef, payload);
    }



    return (
        <div>
            <Button onClick={handleOpen}>Lähetä ilmoitus</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField
                        variant='outlined'
                        label='Anna viesti, esimerkiksi Discord-käyttäjätunnus :)'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        fullWidth
                    />
                    <Button onClick={handleNotif} variant='outlined'>Valmis</Button>

                </Box>
            </Modal>
        </div>
    );
}