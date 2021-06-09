import React from 'react'
import About from "./About"
import Horoscope from "./Horoscope"
import MoonPhases from "./MoonPhases"
import Tarot from "./Tarot"
import Error from "./ErrorPage"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div>
        <Router>
      <Button id="menu-button" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><Link to="/">About</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/horoscope">Horoscope</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/moonphases">Moon Phases</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/tarot">Tarot Card Reader</Link></MenuItem>
      </Menu>
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
