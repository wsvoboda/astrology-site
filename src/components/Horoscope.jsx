import React, {useEffect} from 'react'
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


export default function Horoscope() {
    const dispatch = useDispatch()
    const horoscope = useSelector(state=>state.horoscope)
    const horoscopeCall = async (sign) => {
        const response = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`,{method:"POST"})
        const parsedData = await response.json();
        getHoroscope(dispatch,parsedData)
    }
    
    useEffect(() => {
        horoscopeCall("cancer")
    }, [])

    return (
        <div className="horoscope">
            <h1>Today's Horoscope</h1>
            <p>{horoscope.description}</p>
            <p>You're compatible with {horoscope.compatibility} today.</p>
            <p>Mood: {horoscope.mood}</p>
            <p>Color: {horoscope.color}</p>
            <p>Lucky Number: {horoscope.lucky_number}</p>
            <button onClick={() => horoscopeCall("aquarius")}><img src={aquarius} alt="zodiac"/></button>
            <button onClick={() => horoscopeCall("pisces")}><img src={pisces} alt="zodiac"/></button>
            <button onClick={() => horoscopeCall("aries")}><img src={aries} alt="zodiac"/></button>
            <button onClick={() => horoscopeCall("taurus")}><img src={taurus} alt="zodiac"/></button>
            <button onClick={() => horoscopeCall("gemini")}><img src={gemini} alt="zodiac"/></button>
            <button onClick={() => horoscopeCall("cancer")}><img src={cancer} alt="zodiac"/></button>
            <button onClick={() => horoscopeCall("leo")}><img src={leo} alt="zodiac"/></button>
            <button onClick={() => horoscopeCall("virgo")}><img src={virgo} alt="zodiac"/></button>
            <button onClick={() => horoscopeCall("libra")}><img src={libra} alt="zodiac"/></button>
            <button onClick={() => horoscopeCall("scorpio")}><img src={scorpio} alt="zodiac"/></button>
            <button onClick={() => horoscopeCall("sagittarius")}><img id="sagittarius" src={sagittarius} alt="zodiac"/></button>
            <button onClick={() => horoscopeCall("capricorn")}><img src={capricorn} alt="zodiac"/></button>
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

