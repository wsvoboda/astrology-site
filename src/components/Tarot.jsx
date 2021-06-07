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
            {!tarot ? <p>Loading</p> : tarot.length > 1 ? <TarotReading deal={tarot}/> : <p>No Cards</p>}
            {/* <h2>Deal</h2>
            <button onClick={()=> dealCards()}>Deal Cards</button>
            <h3>The Past</h3><p>{tarot[0].name}</p><img src={process.env.PUBLIC_URL + `/cards/${tarot[0].img}`}  alt="tarot-card"/>
            <h3>The Present</h3><p>{tarot[1].name}</p><img src={process.env.PUBLIC_URL + `/cards/${tarot[1].img}`}  alt="tarot-card"/>
            <h3>The Future</h3><p>{tarot[2].name}</p><img src={process.env.PUBLIC_URL + `/cards/${tarot[2].img}`}  alt="tarot-card"/>
            <div className="dealt-cards">
            {tarot && tarot.length>0 && tarot.map((card) => <div className="one-card"><img src={process.env.PUBLIC_URL + `/cards/${card.img}`}  alt="tarot-card"/><h3>{card.name}</h3><h5>Card Meaning</h5><p>{card.meanings.light.join('. ')}.</p><h5>Fortune Telling</h5><p>{card.fortune_telling.join('. ')}.</p><h5>Questions to Ask Yourself</h5><p>{card.Questions_to_Ask.join(' ')}</p><h5>Keywords</h5><p>{card.keywords.join(', ')}</p></div>)}</div> */}
        </div>
    )
}
