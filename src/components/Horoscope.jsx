import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {getHoroscope} from "../actions/horoscope-actions"


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
        <div>
            <h1>Today's Horoscope</h1>
            <p>{horoscope.description}</p>
            <p>You're compatible with {horoscope.compatibility} today.</p>
            <p>Mood: {horoscope.mood}</p>
            <p>Color: {horoscope.color}</p>
            <p>Lucky Number: {horoscope.lucky_number}</p>
            <button onClick={() => horoscopeCall("aquarius")}>Aquarius</button>
            <button onClick={() => horoscopeCall("pisces")}>Pisces</button>
            <button onClick={() => horoscopeCall("aries")}>Aries</button>
            <button onClick={() => horoscopeCall("taurus")}>Taurus</button>
            <button onClick={() => horoscopeCall("gemini")}>Gemini</button>
            <button onClick={() => horoscopeCall("cancer")}>Cancer</button>
            <button onClick={() => horoscopeCall("leo")}>Leo</button>
            <button onClick={() => horoscopeCall("virgo")}>Virgo</button>
            <button onClick={() => horoscopeCall("libra")}>Libra</button>
            <button onClick={() => horoscopeCall("scorpio")}>Scorpio</button>
            <button onClick={() => horoscopeCall("sagittarius")}>Sagittarius</button>
            <button onClick={() => horoscopeCall("capricorn")}>Capricorn</button>
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

