import React from 'react';
import Nav from './Nav.js'

function Header() {
  return (
    <header>
      <img src={require('./files/logo.png')} alt='logo' className='logo'/>
      <Nav />
    </header>
  );
}

export default Header;
