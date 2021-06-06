import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {getTarotCards} from "../actions/tarot-actions"

export default function Tarot() {
    const dispatch = useDispatch()
    const tarot = useSelector(state=>state.tarot)
    const getCards = async () => {
        const response = await fetch("tarot-images.json")
        const parsedData = await response.json();
        getTarotCards(dispatch,parsedData.cards)
    }
    useEffect(() => {
        getCards()
    }, [])
    
    return (
        <div>
            <h1>Tarot Card Reader</h1>
            {tarot && tarot.length>0 && tarot.map((card) => <p>{card.name}</p>)}
        </div>
    )
}
