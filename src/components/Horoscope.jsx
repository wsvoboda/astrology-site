import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {getHoroscope} from "../actions/horoscope-actions"


export default function Horoscope() {
    const dispatch = useDispatch()
    const horoscope = useSelector(state=>state.horoscope)
    const horoscopeCall = async () => {
        const response = await fetch(`https://aztro.sameerkumar.website/?sign=cancer&day=today`,{method:"POST"})
        const parsedData = await response.json();
        getHoroscope(dispatch,parsedData)
    }
    useEffect(() => {
        horoscopeCall()
    }, [])

    return (
        <div>
            <h1>Today's Cancer Horoscope</h1>
            <p>{horoscope.description}</p>
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

