import React from 'react'
import About from "./About"
import Horoscope from "./Horoscope"
import MoonPhases from "./MoonPhases"
import Tarot from "./Tarot"
import Error from "./ErrorPage"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css"


export default function Navbar() {
   
    return (
        <div>
          
        <Router>
          <div className="menu">
          <div id="menu-items">     
        <Link to="/">About</Link>
        <Link to="/horoscope">Horoscope</Link>
        <Link to="/moonphases">Moon Phases</Link>
        <Link to="/tarot">Tarot Card Reader</Link>
        </div></div>
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
