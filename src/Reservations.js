import {React, useState} from 'react';

function Reservations(props){
    const { reservations } = props;

    return(
        <>
            <article className='reservations-block'>
                <div className='contain'>
                    <h2>Reservation successful!</h2>
                    <p>To edit your reservation simply submit the form again.</p>
                    <ul>
                        {Object.keys(reservations).map((key) => {
                            const reservation = reservations[key];
                            return (
                                <li key={key}>
                                    Your {reservation.ocassion} meal for {reservation.diners} is set at {reservation.time} next {reservation.date}
                                </li>
                            );
                        })}
                    </ul>

                </div>
            </article>
        </>
    );
}

export default Reservations;