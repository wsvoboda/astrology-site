import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {getTarotCards} from "../actions/tarot-actions"

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
            {tarot && tarot.length>0 && tarot.map((card) => <p>{card.name}</p>)}
        </div>
    )
}
