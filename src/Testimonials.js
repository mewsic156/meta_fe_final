import React from 'react';

function Testimonials() {
  return (
    <article>

        <div className='contain'>

            <h2 className='testimonialsTitle'>Testimonials</h2>

            <div className="grid-testimonials-container">

                <div className="grid-testimonials-item">
                <p>5 ⭐️</p>
                <div className='testimonialsDish'>
                    <img src={require('./files/dessert.jpg')}/>
                    <div>dishName</div>
                </div>
                <p>"Wow, such flavor"</p>

                </div>

                <div className="grid-testimonials-item">
                <p>5 ⭐️</p>
                <div className='testimonialsDish'>
                    <img src={require('./files/dessert.jpg')}/>
                    <div>dishName</div>
                </div>
                <p>"Wow, such flavor"</p>

                </div>

                <div className="grid-testimonials-item">
                <p>5 ⭐️</p>
                <div className='testimonialsDish'>
                    <img src={require('./files/dessert.jpg')}/>
                    <div>dishName</div>
                </div>
                <p>"Wow, such flavor"</p>

                </div>

                <div className="grid-testimonials-item">
                <p>5 ⭐️</p>
                <div className='testimonialsDish'>
                    <img src={require('./files/dessert.jpg')}/>
                    <div>dishName</div>
                </div>
                <p>"Wow, such flavor"</p>

                </div>

            </div>

        </div>

    </article>
  );
}

export default Testimonials;
