import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import zodiac from '../assets/zodiac.png';
import moon from '../assets/moon.png';
import cards from '../assets/tarot-cards.png';
import horoscope from '../assets/horoscope.png';

export default function About() {
  return (
    <div>
      <div className='info-container'>
        <div className='info'>
          <h1 className='definition'>
            As·trol·o·gy
            <br />·<br />
            /əˈsträləjē/
          </h1>
          <h2>
            noun: the study of the movements and relative positions of celestial
            bodies interpreted as having an influence on human affairs and the
            natural world
          </h2>
          <p>
            For centuries, humans have looked to the heavens for guidance.
            Astrology can be used as a powerful and fun tool for understanding
            ourselves, others, and the world around us. This site provides
            guidance in three different areas: Zodiac Signs, Moon Phases, and Tarot
            Card Reading.
          </p>
        </div>
        <div className='constellations-container'>
          <img id='constellations' src={horoscope} alt='constellations' />
        </div>
      </div>
      <div className='info-box'>
        <div className='info'>
          <h1>The Zodiac Signs</h1>
          <p>
            Each zodiac sign is associated with a symbol, element, and ruling
            planet. By exploring the traits and tendencies associated with your
            zodiac sign, you can gain insight into your personality and
            potential life paths.
          </p>
          <Link to={'/horoscope'}>
            <button className='buttons'>Learn About Your Sign</button>
          </Link>
        </div>
        <div className='image-div'>
          <img id='zodiac-wheel' src={zodiac} alt='zodiac-wheel' />
        </div>
      </div>
      <div className='middle-info-box'>
        <div className='info'>
          <h1>Moon Phases</h1>
          <p>
            The phase the moon is in has a huge influence on your life, mindset,
            and mood. Working with the moon can strengthen our natural
            instincts.
          </p>
          <Link to={'/moonphases'}>
            <button className='buttons'>See Current Moon Phase</button>
          </Link>
        </div>
        <div className='image-div'>
          <img id='moon' src={moon} alt='moon' />
        </div>
      </div>
      <div className='info-box'>
        <div className='info'>
          <h1>Tarot Cards</h1>
          <p>
            Tarot cards are used for divination and can give insight into your
            past, present, and future. A reading can offer a different
            perspective to a difficult situation or question you may have. We
            provide a three-card reading.
          </p>
          <Link to={'/tarot'}>
            <button className='buttons'>Get a Reading</button>
          </Link>
        </div>
        <div className='image-div'>
          <img id='tarot-cards' src={cards} alt='tarot-cards' />
        </div>
      </div>
    </div>
  );
}
