import React from 'react';

function Specials(){
    return(
        <article className='specials-block'>
            <div className='contain'>
                <div className='specials-title'>
                    <div>
                        <h2>Specials</h2>
                    </div>
                    <div>
                        <button type="button" class="btn btn-warning">Online menu</button>
                    </div>
                </div>

                <div className="grid-specials-container">
                    <div className="grid-specials-item">
                        <img src={require('./files/dessert.jpg')} alt='special1'/>
                        <div className='grid-specials-container-desc'>
                            <div>dishName</div>
                            <div>$ 0.00</div>
                            <p>Lorem ipsum dolor sit amet consectuer</p>
                            <p>- Click here -</p>
                        </div>
                    </div>

                    <div className="grid-specials-item">
                        <img src={require('./files/dessert.jpg')} alt='special2'/>
                        <div className='grid-specials-container-desc'>
                            <div>dishName</div>
                            <div>$ 0.00</div>
                            <p>Lorem ipsum dolor sit amet consectuer</p>
                            <p>- Click here -</p>
                        </div>
                    </div>

                    <div className="grid-specials-item">
                        <img src={require('./files/dessert.jpg')} alt='special3'/>
                        <div className='grid-specials-container-desc'>
                            <div>dishName</div>
                            <div>$ 0.00</div>
                            <p>Lorem ipsum dolor sit amet consectuer</p>
                            <p>- Click here -</p>
                        </div>
                    </div>

                </div>

            </div>
        </article>
    )
}

export default Specials;