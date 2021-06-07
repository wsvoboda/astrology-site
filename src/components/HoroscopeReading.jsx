import React from 'react'

export default function HoroscopeReading({horoscope}) {
    let signName = horoscope[1]
    let upperCasedSignName = signName.charAt(0).toUpperCase() + signName.slice(1)
    return (
        <div>
            <h1>Today's {upperCasedSignName} Horoscope</h1>
            <p>{horoscope[0].description}</p>
            <p>You're compatible with {horoscope[0].compatibility} today.</p>
            <p>Mood: {horoscope[0].mood}</p>
            <p>Color: {horoscope[0].color}</p>
            <p>Lucky Number: {horoscope[0].lucky_number}</p>
        </div>
    )
}
