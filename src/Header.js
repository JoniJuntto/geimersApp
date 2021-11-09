import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import logo from './assets/logo.png';
import { Link } from "react-router-dom";

function Header( ) {
  
  const history = useHistory();
  const handleChat = () => history.push('/chat');
  const handleProfile = () => history.push('/profile');


  return (
    <div className="header">
        <IconButton onClick={handleProfile}>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
        <Link to='/home'>
      <img
          className="header__logo"
          src={logo}
          alt="Geimers logo"
        />
        </Link>
        <IconButton onClick={handleChat}>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
    </div>
  );
}

export default Header;
