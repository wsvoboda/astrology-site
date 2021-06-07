import React from 'react'
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
            {/* <h3>The Past</h3><p>{tarot[0].name}</p>
            <h3>The Present</h3><p>{tarot[1].name}</p>
            <h3>The Future</h3><p>{tarot[2].name}</p> */}
            {tarot && tarot.length>0 && tarot.map((card) => <div><img src={process.env.PUBLIC_URL + `/cards/${card.img}`}  alt="tarot-card"/><p>{card.name}</p></div>)}
        </div>
    )
}
