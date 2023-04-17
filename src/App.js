import './App.css';
import Nav from './Nav.js';
import Form from './Form.js';
import Specials from './Specials.js';
import About from './About.js';
import Contact from './Contact.js';
import Testimonials from './Testimonials.js';

function App() {
  return (
    <>
      <header>
        <Nav/>
      </header>

      <main>
        <Form/>
        <Specials/>
        <Testimonials/>
        <About/>
      </main>

      <footer>
        <Contact/>
      </footer>
    </>
  );
}

export default App;
