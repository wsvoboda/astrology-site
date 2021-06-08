import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {weatherAPIKey} from "../API.js"
import {getMoonPhases} from "../actions/moonPhase-actions"
import "../App.css";
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
        <div className="moon">
            <h1>Current and Upcoming Moon Phases</h1>
            <div  className="moon-forecast">
            {moonPhases && moonPhases.length>0 && moonPhases.map((phase, index) => 
            <div className="one-phase">
                {matchPictureWithMoonPhase(`${phase.moonphase}`)}
                <h3>{todayPlus5Days[`${index}`]}</h3>
            </div>
            )}</div>
            <h1>What the Phases Mean</h1>
            <h1>New Moon</h1>
            <h2>New Beginnings</h2>
            <p>This is where it all begins. This is the best time to acknowledge goals. Write a to do list! Bring ideas to consciousness. BUT! Wait until the First Quarter Moon Phase to take action.</p>
            <h1>Waxing Crescent</h1>
            <h2>The Energy is Building</h2>
            <p>The moon's light is increasing and it's building its form. Gather energies to help you on your way. Bring new things, people, and relationships into your life.</p>
            <h1>First Quarter</h1>
            <h2>Gaining Momentum</h2>
            <p>Take action on your goals. Focus on accelerating the progress of your projects. Make forward strides. Catch onto the growing power of the moon.</p>
            <h1>Waxing Gibbous</h1>
            <h2>The Last Push</h2>
            <p>There are only three days left before the full moon! Add to what you have been building the last few weeks. The time has almost arrived for fruition and maximum energy.</p>
            <h1>Full Moon</h1>
            <h2>The Celebration</h2>
            <p>This is what you've been waiting for. You are naturally accelerated. Energy is flowing! Give thanks to what you have accomplished. Emotions are heightened.</p>
            <h1>Waning Gibbous</h1>
            <h2>Time to Let Go</h2>
            <p>The moon's light is decreasing.  This is the time to let go, release, retire. Take some time for introspection. Remove things from your life that are no longer serving you. Do not start new projects.</p>
            <h1>Last Quarter</h1>
            <h2>Winding Down</h2>
            <p>Tie up loose ends and file things away from your projects. During this moon phase, you're self-aware and energized to break negative patterns.</p>
            <h1>Waning Crescent</h1>
            <h2>Relax, Rest, and Retreat</h2>
            <p>Perfect time to meditate, contemplate, and wind down. Let go and look inward. This is the best time to schedule major operations, waxing, or hair removal. There will be less blood loss and recuperation will be supported by the upcoming waxing moon.</p>
        </div>
    )
}
 