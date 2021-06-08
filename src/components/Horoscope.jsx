import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {getHoroscope} from "../actions/horoscope-actions"
import "../App.css";
import aquarius from "../assets/zodiac/aquarius.png"
import aries from "../assets/zodiac/aries.png"
import cancer from "../assets/zodiac/cancer.png"
import capricorn from "../assets/zodiac/capricorn.png"
import gemini from "../assets/zodiac/gemini.png"
import leo from "../assets/zodiac/leo.png"
import libra from "../assets/zodiac/libra.png"
import pisces from "../assets/zodiac/pisces.png"
import sagittarius from "../assets/zodiac/sagittarius.png"
import scorpio from "../assets/zodiac/scorpio.png"
import taurus from "../assets/zodiac/taurus.png"
import virgo from "../assets/zodiac/virgo.png"
import HoroscopeReading from "../components/HoroscopeReading"


export default function Horoscope() {
    const dispatch = useDispatch()
    const horoscope = useSelector(state=>state.horoscope)
    const horoscopeCall = async (sign) => {
        const response = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`,{method:"POST"})
        const parsedData = await response.json();
        getHoroscope(dispatch, parsedData, sign)
    }
    return (
        <div className="horoscope">
            <h1>Choose Your Sign to See Today's Horoscope</h1>
            <div className="all-zodiac-buttons">
            <div className="zodiac-button">
                <button onClick={() => horoscopeCall("aquarius")}><img src={aquarius} alt="zodiac"/><p className="dates">Jan 20<br></br>-<br></br>Feb 18</p></button>
            </div>
            <div className="zodiac-button">
                <button onClick={() => horoscopeCall("pisces")}><img src={pisces} alt="zodiac"/><p className="dates">Feb 19<br></br>-<br></br>Mar 20</p></button>
            </div>
            <div className="zodiac-button">
                <button onClick={() => horoscopeCall("aries")}><img src={aries} alt="zodiac"/><p className="dates">Mar 21<br></br>-<br></br>Apr 20</p></button>
            </div>
            <div className="zodiac-button">
                <button onClick={() => horoscopeCall("taurus")}><img src={taurus} alt="zodiac"/><p className="dates">Apr 21<br></br>-<br></br>May 20</p></button>
            </div>
            <div className="zodiac-button">
                <button onClick={() => horoscopeCall("gemini")}><img src={gemini} alt="zodiac"/><p className="dates">May 21<br></br>-<br></br>Jun 21</p></button>
            </div>
            <div className="zodiac-button">
                <button onClick={() => horoscopeCall("cancer")}><img src={cancer} alt="zodiac"/><p className="dates">Jun 22<br></br>-<br></br>Jul 22</p></button>
            </div></div>
            <div className="all-zodiac-buttons">
            {horoscope[0].color ? <HoroscopeReading horoscope={horoscope}/> : <p></p>}</div>
            <div className="all-zodiac-buttons">
            <div className="zodiac-button">
                <button onClick={() => horoscopeCall("leo")}><img src={leo} alt="zodiac"/><p className="dates">Jul 23<br></br>-<br></br>Aug 22</p></button>
            </div>
            <div className="zodiac-button">
                <button onClick={() => horoscopeCall("virgo")}><img src={virgo} alt="zodiac"/><p className="dates">Aug 23<br></br>-<br></br>Sep 22</p></button>
            </div>
            <div className="zodiac-button">
                <button onClick={() => horoscopeCall("libra")}><img src={libra} alt="zodiac"/><p className="dates">Sep 23<br></br>-<br></br>Oct 22</p></button>
            </div>
            <div className="zodiac-button">
                <button onClick={() => horoscopeCall("scorpio")}><img src={scorpio} alt="zodiac"/><p className="dates">Oct 23<br></br>-<br></br>Nov 22</p></button>
            </div>
            <div className="zodiac-button-sag">
                <button onClick={() => horoscopeCall("sagittarius")}><img id="sagittarius" src={sagittarius} alt="zodiac-sag"/><p className="dates-sag">Nov 23<br></br>-<br></br>Dec 21</p></button>
            </div>
            <div className="zodiac-button">
                <button onClick={() => horoscopeCall("capricorn")}><img src={capricorn} alt="zodiac"/><p className="dates">Dec 22<br></br>-<br></br>Jan 19</p></button>
            </div>
            </div>
            
        </div>
    )
}

// aquarius jan 20 - feb 18
// pisces feb 19 - mar 20
// aries mar 21 - apr 20
// taurus apr 21 - may 20
// gemini may 21 - jun 21
// cancer jun 22 - jul 22
// leo jul 23 - aug 22
// virgo aug 23 - sep 22
// libra sep 23 - oct 22
// scorpio oct 23 - nov 22
// sagittarius nov 23 - dec 21
// capricorn dec 22 - jan 19

