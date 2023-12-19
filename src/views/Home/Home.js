import React from 'react'
import I18n from '../../utils/I18n';
import "./Home.css";

function Home() {

    const usersCount = 25;

    return (
        <div className='container'>
            <h1>{I18n( "welcomeMessage")}</h1>

            <p>{I18n("normalMessage")}</p>

            <h3>{I18n("greetingMessage")}</h3>

            <h5>{I18n("endMessage")}</h5>

            <select
             defaultValue={localStorage.getItem("lang")}
             onChange={(e)=>{
               localStorage.setItem ("lang", e.target.value);
               window.location.reload();
            }}>
                <option value="mr">Marathi</option>
                <option value="hi">Hindi</option>
                <option value="en">English</option>
            </select>

            <p>
                {I18n("usersStateMessage", "<studentCount>", usersCount)}
            </p>
        </div>
    )
}

export default Home