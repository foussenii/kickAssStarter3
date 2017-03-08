import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">



<header className="kickass-menu">
  <div className="kickass-flex kickass-logo">
    <i className="fa fa-hourglass-half" aria-hidden="true"></i>
    <h1 className="kickass-h1">KickAssStarter</h1>
  </div>
  <div className="kickass-menu-btn">
  <button className="kickass-btn" type="button" name="button">Créer un projet</button>
  </div>
  <div>
    <i className="fa fa-search" aria-hidden="true"></i>
    <input type="text"></input>
  </div>
  <div className="kickass-flex">
    <div className="kickass-sign">
      <p>S'inscrire</p>
    </div>
    <div className="kickass-login">
      <p>Se connecter</p>
    </div>
  </div>







</header>















      </div>
    );
  }
}

export default Header;
