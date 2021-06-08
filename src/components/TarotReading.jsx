import React from 'react'
import "../App.css"

export default function TarotReading({deal}) {
    return (
        <div>
            <div className="dealt-cards">
            <div className="one-card"><h3>The Past</h3><p>{deal[0].name}</p><img src={process.env.PUBLIC_URL + `/cards/${deal[0].img}`}  alt="tarot-card"/><h5>Card Meaning</h5><p>{deal[0].meanings.light.join('. ')}.</p><h5>Keywords</h5><p>{deal[0].keywords.join(', ')}</p></div>
            <div className="one-card"><h3>The Present</h3><p>{deal[1].name}</p><img src={process.env.PUBLIC_URL + `/cards/${deal[1].img}`}  alt="tarot-card"/><h5>Card Meaning</h5><p>{deal[1].meanings.light.join('. ')}.</p><h5>Keywords</h5><p>{deal[1].keywords.join(', ')}</p><h5>Fortune Telling</h5><p>{deal[1].fortune_telling.join('. ')}.</p><h5>Questions to Ask Yourself</h5><p>{deal[1].Questions_to_Ask.join(' ')}</p></div>
            <div className="one-card"><h3>The Future</h3><p>{deal[2].name}</p><img src={process.env.PUBLIC_URL + `/cards/${deal[2].img}`}  alt="tarot-card"/><h5>Card Meaning</h5><p>{deal[2].meanings.light.join('. ')}.</p><h5>Keywords</h5><p>{deal[2].keywords.join(', ')}</p><h5>Fortune Telling</h5><p>{deal[2].fortune_telling.join('. ')}.</p></div>
            </div>
        </div>
    )
}
