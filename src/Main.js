import React from "react";
import Form from './Form.js';
import Specials from './Specials.js';
import About from './About.js';
import Testimonials from './Testimonials.js';

function Main(){
    return(
        <>
            <Form/>
            <Specials/>
            <Testimonials/>
            <About/>
        </>
    );
}

export default Main;