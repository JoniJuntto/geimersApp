import React from "react";
import "./Header.css";
import logo from '../assets/logo.png';
import {Button} from '@material-ui/core';
import ModalLogin from "./ModalLogin";


function Header( ) {



  return (
      <div className="header">
        <Button variant='contained' color="secondary" >Kirjaudu ulos</Button>
      <img
          className="header__logo"
          src={logo}
          alt="Geimers logo"
          style={{
            position: 'absolute', left: '50%',
            transform: 'translate(-50%, 10%)'
        }}
        />
        <ModalLogin />
    </div>
  );
}

export default Header;
