import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {weatherAPIKey} from "../API.js"
import {getMoonPhases} from "../actions/moonPhase-actions"
import firstquarter from "../assets/moonphases/firstquarter.png"
import lastquarter from "../assets/moonphases/lastquarter.png"
import full from "../assets/moonphases/full.png"
import newmoon from "../assets/moonphases/newmoon.png"
import waningcrescent from "../assets/moonphases/waningcrescent.png"
import waninggibbous from "../assets/moonphases/waninggibbous.png"
import waxingcrescent from "../assets/moonphases/waxingcrescent.png"
import waxinggibbous from "../assets/moonphases/waxinggibbous.png"

export default function MoonPhases() {
    const dispatch = useDispatch()
    const moonPhases = useSelector((state)=>state.moonPhases)
    const moonPhaseCall = async () => {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dallas,TX?unitGroup=us&key=${weatherAPIKey}&include=days&elements=datetime,moonphase,sunrise,sunset`)
        const parsedData = await response.json();
        getMoonPhases(dispatch,parsedData.days.slice(0, 5))
    }

    let todayPlus0 = new Date()
    todayPlus0.setDate(todayPlus0.getDate() + 0)
    let todayPlus1 = new Date(todayPlus0)
    todayPlus1.setDate(todayPlus0.getDate() + 1)
    let todayPlus2 = new Date(todayPlus0)
    todayPlus2.setDate(todayPlus0.getDate() + 2)
    let todayPlus3 = new Date(todayPlus0)
    todayPlus3.setDate(todayPlus0.getDate() + 3)
    let todayPlus4 = new Date(todayPlus0)
    todayPlus4.setDate(todayPlus0.getDate() + 4)

    let todayPlus5Days = [todayPlus0.toString().split(" ").slice(0,3).toString().replace(/,/g, ' '), todayPlus1.toString().split(" ").slice(0,3).toString().replace(/,/g, ' '), todayPlus2.toString().split(" ").slice(0,3).toString().replace(/,/g, ' '), todayPlus3.toString().split(" ").slice(0,3).toString().replace(/,/g, ' '), todayPlus4.toString().split(" ").slice(0,3).toString().replace(/,/g, ' ')]

    const matchPictureWithMoonPhase = (phase) => {
        if (phase === "0") {
            return <div><img src={newmoon} alt="moonpic"/><p>New Moon</p></div> 
        }
        if (phase > 0 && phase < 0.25) {
            return <div><img src={waxingcrescent} alt="moonpic"/><p>Waxing Crescent</p></div> 
        }
        if (phase === "0.25") {
            return <div><img src={firstquarter} alt="moonpic"/><p>First Quarter</p></div> 
        }
        if (phase > 0.25 && phase < 0.50) {
            return <div><img src={waxinggibbous} alt="moonpic"/><p>Waxing Gibbous</p></div> 
        }
        if (phase === "0.5") {
            return <div><img src={full} alt="moonpic"/><p>Full Moon</p></div> 
        }
        if (phase > 0.5 && phase < 0.75) {
            return <div><img src={waninggibbous} alt="moonpic"/><p>Waning Gibbous</p></div> 
        }
        if (phase === "0.75") {
            return <div><img src={lastquarter} alt="moonpic"/><p>Last Quarter</p></div> 
        }
        if (phase > 0.75 && phase <= 1) {
            return <div><img src={waningcrescent} alt="moonpic"/><p>Waning Crescent</p></div> 
        }
        }

    useEffect(() => {
        moonPhaseCall()
        matchPictureWithMoonPhase(moonPhases)
    }, [])

    return (
        <div>
            <h1>Moon Phase for Today and Next Four Days</h1>
            {moonPhases && moonPhases.length>0 && moonPhases.map((phase, index) => 
            <div>
                {matchPictureWithMoonPhase(`${phase.moonphase}`)}
                <h3>{todayPlus5Days[`${index}`]}</h3>
            </div>
            )}
        </div>
    )
}
 