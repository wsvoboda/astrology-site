import React from 'react'
import About from "./About"
import Horoscope from "./Horoscope"
import MoonPhases from "./MoonPhases"
import Tarot from "./Tarot"
import Error from "./ErrorPage"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css"
import {GiStarProminences} from "react-icons/gi"
import {WiMoonAltWaningCrescent4} from "react-icons/wi"
import {GiCrystalBall} from "react-icons/gi"
import {RiSunLine} from "react-icons/ri"
import {CgMoon} from "react-icons/cg"
import {HiOutlineStar} from "react-icons/hi"




export default function Navbar() {
   
    return (
        <div>
        <Router>
        <div className="menu"> 
        <div className="logo-div">
          <Link to="/">
            <div class="link-with-pic">
              <div className="home-logos"><CgMoon/><RiSunLine/><HiOutlineStar/>
              </div>
              MoonSunStars
              </div>
              </Link>
          </div>
          <div className="right-links">
        <div id="menu-items"> 
          <Link to="/horoscope">
            <div class="link-with-pic"><GiStarProminences/>Horoscope</div>
            </Link>
            </div>
        <div id="menu-items">
          <Link to="/moonphases">
            <div class="link-with-pic"><WiMoonAltWaningCrescent4/>Moon Phases</div>
            </Link>
          </div>
          <div id="menu-items">
        <Link to="/tarot">
          <div class="link-with-pic"><GiCrystalBall/>Tarot Card Reader</div>
          </Link>
        </div>
        </div>
        </div>
        <div className="menu-mobile"> 
        <div className="logo-div">
          <Link to="/">
            <div class="link-with-pic">
              <div className="home-logos"><CgMoon/><RiSunLine/><HiOutlineStar/>
              </div>
              MoonSunStars
              </div>
              </Link>
          </div>
          <div className="right-links">
        <div id="menu-items"> 
          <Link to="/horoscope">
            <div class="link-with-pic"><GiStarProminences/></div>
            </Link>
            </div>
        <div id="menu-items">
          <Link to="/moonphases">
            <div class="link-with-pic"><WiMoonAltWaningCrescent4/></div>
            </Link>
          </div>
          <div id="menu-items">
        <Link to="/tarot">
          <div class="link-with-pic"><GiCrystalBall/></div>
          </Link>
        </div>
        </div>
        </div>
      <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/horoscope" component={Horoscope} />
                    <Route exact path="/moonphases" component={MoonPhases} />
                    <Route exact path="/tarot" component={Tarot} />
                    <Route path="*" component={Error} />
                </Switch>
            </Router>
        
        </div>
    )
}
