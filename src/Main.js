import React from 'react';

function Main() {
  return (
    <main>
        <div className='main-content'>
          <h1>Reserve a table</h1>
          <p className='formDesc'>Fill the form to reserve your table</p>

              <form>
                <p>
                  <label for="diners">
                    NUMBER OF DINERS:
                    <input type="number" id="diners" name="diners" min="2" max="8" value="4"/>
                  </label>
                </p>

                <p>
                  <label for="res_date">
                    DATE:
                    <input type="date" id="res_date" name="date"></input>
                  </label>
                </p>

                <p>
                  <label for="res_time">
                    TIME:
                    <input type="time" id="res_time" name="time" min="07:00" max="23:00"/>
                  </label>
                </p>

                <p>
                  <label>
                    🍷 OCASSION:
                    <select className=''>
                      <option value="option1">🎁 Birthday</option>
                      <option value="option2">💍 Engagement</option>
                      <option value="option3">⛪️ Anniversary</option>
                    </select>
                  </label>
                </p>

                <hr/>

                <button type="button" class="btn btn-warning">Reserve a table</button>

              </form>



          

        </div>
    </main>
  );
}

export default Main;
