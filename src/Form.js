import {React, useState} from 'react';
import Reservations from './Reservations.js';

function Form(){

    const [diners, setDiners] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [ocassion, setOcassion] = useState("casual");
    const [show, setShow] = useState(false);
    const [reservations, setReservations] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReservation = {
            diners: diners,
            time: time,
            date: date,
            ocassion: ocassion,
          };
        setReservations({ ...reservations, newReservation });
        setShow(true);
    }


    return(
        <>
        <article className='form-block'>
            <div className="contain">
                <h1>Reserve a table</h1>
                <p>Fill the form to reserve your table</p>

                <form onSubmit={handleSubmit}>
                    <p>
                    <label htmlFor='diners'>
                        NUMBER OF DINERS:
                        <input required type="number"  id='diners' name="diners" min="2" max="8" value={diners} onChange={(e) => setDiners(e.target.value)}/>
                    </label>
                    </p>

                    <p>
                    <label htmlFor='date'>
                        DATE:
                        <input required type="date" id='date'name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                    </label>
                    </p>

                    <p>
                    <label htmlFor='time'>
                        TIME:
                        <input required type="time" id="time" name="time" min="07:00" max="23:00" value={time} onChange={(e) => setTime(e.target.value)}/>
                    </label>
                    </p>

                    <p>
                    <label htmlFor='ocassion'>
                        🍷 OCASSION:
                        <select name="ocassion" id='ocassion' value={ocassion} onChange={(e) => setOcassion(e.target.value)}>
                        <option value="casual">🍜 Casual</option>
                        <option value="birthday">🎁 Birthday</option>
                        <option value="engagement">💍 Engagement</option>
                        <option value="anniversary">⛪️ Anniversary</option>
                        </select>
                    </label>
                    </p>

                    <hr/>

                    <button type="submit" className="btn btn-warning">Reserve a table</button>
                </form>
            </div>
        </article>
        {show && <Reservations reservations={reservations}/>}
        </>

    );
}

export default Form;