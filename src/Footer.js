import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="grid-footer-container">
        <div><img className='footer-image' src={require('./files/restaurant.jpg')}/></div>

        <div className="grid-footer-item">
          <p>Navigation</p>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>

        <div className="grid-footer-item">
          <p>Contact</p>
          <ul>
            <li>Link 4</li>
            <li>Link 5</li>
            <li>Link 6</li>
          </ul>
        </div>

        <div className="grid-footer-item">
          <p>Social media</p>
          <ul>
            <li>Link 7</li>
            <li>Link 8</li>
            <li>Link 9</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
