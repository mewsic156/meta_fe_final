import React from 'react';

function Nav() {
  return (
    <>
      <img src={require('./files/logo.png')} alt='logo' className='logo'/>

      <nav>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/form">Reservations</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
