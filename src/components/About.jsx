import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import zodiac from "../assets/zodiac.png";
import moon from "../assets/moon.png";
import cards from "../assets/tarot-cards.png";
import horoscope from "../assets/horoscope.png";

export default function About() {
  return (
    <div>
      <div className="info-container">
        <div className="info">
          <h1 className="definition">
            As·trol·o·gy<br></br>·<br></br>/əˈsträləjē/
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
            guidance in three different areas: Horoscope, Moon Phases, and Tarot
            Card Reading.
          </p>
        </div>
        <div className="constellations-container">
          <img id="constellations" src={horoscope} alt="constellations" />
        </div>
      </div>
      <div className="info-box">
        <div className="info">
          <h1>Horoscope</h1>
          <p>
            A horoscope uses an astrological chart calculated from the planetary
            positions. The calculations are based on the date, place and time of
            birth. That is why horoscopes are extremely personal, like a
            fingerprint.
          </p>
          <Link to={"/horoscope"}>
            <button className="buttons">See Today's Horoscope</button>
          </Link>
        </div>
        <div className="image-div">
          <img id="zodiac-wheel" src={zodiac} alt="zodiac-wheel" />
        </div>
      </div>
      <div className="middle-info-box">
        <div className="info">
          <h1>Moon Phases</h1>
          <p>
            The phase the moon is in has a huge influence on your life, mindset,
            and mood. Working with the moon can strengthen our natural
            instincts.
          </p>
          <Link to={"/moonphases"}>
            <button className="buttons">See Current Moon Phase</button>
          </Link>
        </div>
        <div className="image-div">
          <img id="moon" src={moon} alt="moon" />
        </div>
      </div>
      <div className="info-box">
        <div className="info">
          <h1>Tarot Cards</h1>
          <p>
            Tarot cards are used for divination and can give insight into your
            past, present, and future. A reading can offer a different
            perspective to a difficult situation or question you may have. We
            provide a three-card reading.
          </p>
          <Link to={"/tarot"}>
            <button className="buttons">Get a Reading</button>
          </Link>
        </div>
        <div className="image-div">
          <img id="tarot-cards" src={cards} alt="tarot-cards" />
        </div>
      </div>
    </div>
  );
}
