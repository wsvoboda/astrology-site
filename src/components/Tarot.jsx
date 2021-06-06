import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {getTarotCards} from "../actions/tarot-actions"

export default function Tarot() {
    const dispatch = useDispatch()
    const tarot = useSelector(state=>state.tarot)
    const getCards = async () => {
        const response = await fetch("tarot-images.json")
        const parsedData = await response.json();
        getTarotCards(dispatch,parsedData)
        console.log(parsedData)
    }
    useEffect(() => {
        getCards()
    }, [])
    
    return (
        <div>
            <h1>Tarot Card Reader</h1>
            <p>{tarot.cards[0].name}</p>
        </div>
    )
}
