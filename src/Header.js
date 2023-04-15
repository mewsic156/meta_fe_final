import React from 'react';

function Header() {
  return (
    <header>
      <img src={require('./files/logo.png')} alt='logo' className='logo'/>
      <nav>
      <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order-online">Order online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
    </header>
  );
}

export default Header;
