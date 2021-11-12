import React from "react";
import "./Header.css";
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

function Header( ) {
  
  const history = useHistory();
  const handleChat = () => history.push('/chat');
  const handleProfile = () => history.push('/ownProfile');





  return (
    <div className="header">
        <IconButton onClick={handleProfile}>
          <PersonIcon className="header__icon" fontSize="large" />
          <Typography variant='h6' >Profiili</Typography>
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
