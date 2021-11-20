import React, {useState, useEffect} from "react";
import "./Header.css";
import { doc, getDoc } from "@firebase/firestore";
import { useAuth, db } from "../firebase";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import GroupIcon from '@mui/icons-material/Group';
import { Typography } from "@mui/material";
import ModalLogin from "./ModalLogin";
import {logout} from '../firebase';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function Header( ) {
  const currentUser = useAuth();
  const [notifs, setNotifs] = useState([]);
  
  const history = useHistory();
  const handleChat = () => history.push('/chat');
  const handleProfile = () => history.push('/ownProfile');


  const getUserNotifs = async () => {
    const docRef = doc(db, "userNotifs", currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const notificationArr = docSnap.data();
        const notifsArr = notificationArr.notifications;
        console.log(notifsArr)
        setNotifs(notifsArr.msg);
    } else {
        // doc.data() will be undefined in this case
        setNotifs({
            msg: ["no messages"],
            senderID: ["no sender ids"]
        })
        console.log("No such document!");
    }
}

useEffect(() => {
    if (currentUser) {
        getUserNotifs();
    }
}, [currentUser]);


  return (
    <div className="header">
        <IconButton onClick={handleProfile}>
          <PersonIcon className="header__icon" fontSize="large" />
          <Typography variant='h6' >Profiili</Typography>
          <div>{notifs.length > 1
                        ? <NotificationsActiveIcon />
                        :<p></p>
                        }
                        </div>
        </IconButton>

        <div style={{
                position: 'absolute', left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
        <Link to='/home'>
      <img
          className="header__logo"
          src={logo}
          alt="Geimers logo"
        />
        </Link>
        </div>
        <IconButton onClick={handleChat}>
          <GroupIcon className="header__icon" fontSize="large" />
          <Typography variant='h6' >Kaverit</Typography>
        </IconButton>
    </div>
  );
}

export default Header;
