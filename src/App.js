import './App.css';
import Main from './Main.js';
import About from './About.js';
import Specials from './Specials.js';
import Contact from './Contact.js';
import Form from './Form.js';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <img src={require('./files/logo.png')} alt='logo' className='logo'/>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/about" element={<About color="white"/>}/>
          <Route path="/menu" element={<Specials/>}/>
          <Route path="/reservations" element={<Form/>}/>
        </Routes>
      </main>

      <footer>
        <Contact/>
      </footer>
    </>
  );
}

export default App;
