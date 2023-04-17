import React from 'react';

function About(){
    return(
        <>
            <article className='about-block'>
                <div className='contain'>
                    <div>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>

                    <div className='imageFrame'>
                        <img src={require('./files/potato.jpg')} alt='potato'/>
                        <img src={require('./files/tomato.jpg')} alt='tomato'/>
                    </div>
                </div>
            </article>
        </>
    )
}

export default About;