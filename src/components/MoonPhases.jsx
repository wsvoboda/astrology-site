import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {weatherAPIKey} from "../API.js"
import {getMoonPhases} from "../actions/moonPhase-actions"

export default function MoonPhases() {
    const dispatch = useDispatch()
    const moonPhases = useSelector((state)=>state.moonPhases)
    const moonPhaseCall = async () => {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dallas,TX?unitGroup=us&key=${weatherAPIKey}&include=days&elements=datetime,moonphase,sunrise,sunset`)
        const parsedData = await response.json();
        getMoonPhases(dispatch,parsedData.days.slice(0, 5))
    }
    let moonPhase = ""
    const matchPictureWithMoonPhase = (phase) => {
        if (phase === 0) {
            moonPhase = "New Moon"
        }
        if (phase > 0 && phase < 0.25) {
            moonPhase = "Waxing Crescent"
        }
        if (phase === 0.25) {
            moonPhase = "First Quarter"
        }
        if (phase > 0.25 && phase < 0.50) {
            moonPhase = "Waxing Gibbous"
        }
        if (phase === 0.5) {
            moonPhase = "Full Moon"
        }
        if (phase > 0.5 && phase < 0.75) {
            moonPhase = "Waning Gibbous"
        }
        if (phase === 0.75) {
            moonPhase = "Last Quarter"
        }
        if (phase > 0.75 && phase <= 1) {
            moonPhase = "Waning Crescent"
        }
        return moonPhase
        }

    useEffect(() => {
        moonPhaseCall()
        matchPictureWithMoonPhase(moonPhases)
    }, [])

    return (
        <div>
            <h1>Moon Phase for Today and Next Five Days</h1>
            {moonPhases && moonPhases.length>0 && moonPhases.map((phase) => <div><p>{phase.moonphase}</p> <p>{moonPhase}</p></div>)}
        </div>
    )
}
 
// 0 – new moon
// 0-0.25 – waxing crescent
// 0.25 – first quarter
// 0.25-0.5 – waxing gibbous
// 0.5 – full moon
// 0.5-0.75 – waning gibbous
// 0.75 – last quarter
// 0.75 -1 – waning crescent