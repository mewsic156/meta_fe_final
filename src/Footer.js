import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="grid-footer-container">
        <div className="grid-footer-item"><img src={require('./files/dessert.jpg')}/></div>
        <div className="grid-footer-item">Link 1</div>
        <div className="grid-footer-item">Link 2</div>
        <div className="grid-footer-item">Link 3</div>
      </div>
    </footer>
  );
}

export default Footer;
