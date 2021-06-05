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
