import React from "react";
import "./Header.css";
import logo from '../assets/logo.png';
import {Button} from '@material-ui/core';
import ModalLogin from "./ModalLogin";


function HeaderHome( ) {



  return (
      <div>
        
      <img
          className="header__logo"
          src={logo}
          alt="Geimers logo"
          style={{
            position: 'absolute', left: '50%',
            transform: 'translate(-50%, 10%)'
        }}
        />

    </div>
  );
}

export default HeaderHome;
