import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {getTarotCards} from "../actions/tarot-actions"
import TarotReading from "../components/TarotReading"
import "../App.css"

export default function Tarot() {
    const dispatch = useDispatch()
    const tarot = useSelector(state=>state.tarot)

    const dealCards = async () => {
        const response = await fetch("tarot-images.json")
        const parsedData = await response.json();
        let shuffledCards = parsedData.cards.sort(()=>Math.random() - 0.5)
        let dealtCards = shuffledCards.slice(0, 3)
        getTarotCards(dispatch, dealtCards)
    }
    
    return (
        <div>
            <h1>Tarot Card Reader</h1>
            <h2>Deal</h2>
            <button onClick={()=> dealCards()}>Deal Cards</button>
            {tarot.length > 1 ? <TarotReading deal={tarot}/> : <p></p>}
        </div>
    )
}
