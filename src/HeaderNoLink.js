import React from "react";
import "./Header.css";
import logo from './assets/logo.png';


function Header( ) {

  return (
      <div>
      <img
          className="header__logo"
          src={logo}
          alt="Geimers logo"
        />
    </div>
  );
}

export default Header;
