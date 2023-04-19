import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { weatherAPIKey } from "../API.js";
import { getMoonPhases } from "../actions/moonPhase-actions";
import "../App.css";
import firstquarter from "../assets/moonphases/firstquarter.png";
import lastquarter from "../assets/moonphases/lastquarter.png";
import full from "../assets/moonphases/full.png";
import newmoon from "../assets/moonphases/newmoon.png";
import waningcrescent from "../assets/moonphases/waningcrescent.png";
import waninggibbous from "../assets/moonphases/waninggibbous.png";
import waxingcrescent from "../assets/moonphases/waxingcrescent.png";
import waxinggibbous from "../assets/moonphases/waxinggibbous.png";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { WiMoonset } from "react-icons/wi";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "1px 1px 7px white",
  },
  root: {
    width: "50%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "90%",
    },
  },
  inner: {
    fontFamily: "Cuprum",
    color: "white",
    textShadow: "2px 2px 10px black",
    textAlign: "justify",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    fontFamily: "Cuprum",
    color: "white",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: "white",
    fontWeight: "normal",
    fontFamily: "Cuprum",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 16,
    },
  },
}));

export default function MoonPhases() {
  const dispatch = useDispatch();
  const moonPhases = useSelector((state) => state.moonPhases);
  const moonPhaseCall = async () => {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dallas,TX?unitGroup=us&key=${weatherAPIKey}&include=days&elements=datetime,moonphase,sunrise,sunset`
    );
    const parsedData = await response.json();
    getMoonPhases(dispatch, parsedData.days.slice(0, 5));
  };
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let todayPlus0 = new Date();
  todayPlus0.setDate(todayPlus0.getDate() + 0);
  let todayPlus1 = new Date(todayPlus0);
  todayPlus1.setDate(todayPlus0.getDate() + 1);
  let todayPlus2 = new Date(todayPlus0);
  todayPlus2.setDate(todayPlus0.getDate() + 2);
  let todayPlus3 = new Date(todayPlus0);
  todayPlus3.setDate(todayPlus0.getDate() + 3);
  let todayPlus4 = new Date(todayPlus0);
  todayPlus4.setDate(todayPlus0.getDate() + 4);

  let todayPlus5Days = [
    todayPlus0.toString().split(" ").slice(0, 3).toString().replace(/,/g, " "),
    todayPlus1.toString().split(" ").slice(0, 3).toString().replace(/,/g, " "),
    todayPlus2.toString().split(" ").slice(0, 3).toString().replace(/,/g, " "),
    todayPlus3.toString().split(" ").slice(0, 3).toString().replace(/,/g, " "),
    todayPlus4.toString().split(" ").slice(0, 3).toString().replace(/,/g, " "),
  ];

  const matchPictureWithMoonPhase = (phase) => {
    if (phase === "0") {
      return (
        <div>
          <img src={newmoon} alt="moonpic" />
          <p>New Moon</p>
        </div>
      );
    }
    if (phase > 0 && phase < 0.25) {
      return (
        <div>
          <img src={waxingcrescent} alt="moonpic" />
          <p>Waxing Crescent</p>
        </div>
      );
    }
    if (phase === "0.25") {
      return (
        <div>
          <img src={firstquarter} alt="moonpic" />
          <p>First Quarter</p>
        </div>
      );
    }
    if (phase > 0.25 && phase < 0.5) {
      return (
        <div>
          <img src={waxinggibbous} alt="moonpic" />
          <p>Waxing Gibbous</p>
        </div>
      );
    }
    if (phase === "0.5") {
      return (
        <div>
          <img src={full} alt="moonpic" />
          <p>Full Moon</p>
        </div>
      );
    }
    if (phase > 0.5 && phase < 0.75) {
      return (
        <div>
          <img src={waninggibbous} alt="moonpic" />
          <p>Waning Gibbous</p>
        </div>
      );
    }
    if (phase === "0.75") {
      return (
        <div>
          <img src={lastquarter} alt="moonpic" />
          <p>Last Quarter</p>
        </div>
      );
    }
    if (phase > 0.75 && phase <= 1) {
      return (
        <div>
          <img src={waningcrescent} alt="moonpic" />
          <p>Waning Crescent</p>
        </div>
      );
    }
  };

  useEffect(() => {
    moonPhaseCall();
    matchPictureWithMoonPhase(moonPhases);
  }, []);

  return (
    <div className="moon">
      <h1>Current and Upcoming Moon Phases</h1>
      <div className="moon-forecast">
        {moonPhases &&
          moonPhases.length &&
          moonPhases.map((phase, index) => (
            <div className="one-phase" key={index}>
              {matchPictureWithMoonPhase(`${phase.moonphase}`)}
              <h3>{todayPlus5Days[`${index}`]}</h3>
            </div>
          ))}
      </div>
      <h1>What the Phases Mean</h1>
      <div className="definitions-accordian">
        <div className={classes.root}>
          <Accordion
            className={classes.background}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<WiMoonset className={classes.inner} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>New Moon</Typography>
              <Typography className={classes.secondaryHeading}>
                New Beginnings
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.inner}>
                This is where it all begins. This is the best time to
                acknowledge goals. Write a to do list! Bring ideas to
                consciousness. BUT! Wait until the First Quarter Moon Phase to
                take action.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={classes.background}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<WiMoonset className={classes.inner} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>
                Waxing Crescent
              </Typography>
              <Typography className={classes.secondaryHeading}>
                The Energy is Building
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.inner}>
                The moon's light is increasing and it's building its form.
                Gather energies to help you on your way. Bring new things,
                people, and relationships into your life.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={classes.background}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<WiMoonset className={classes.inner} />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>First Quarter</Typography>
              <Typography className={classes.secondaryHeading}>
                Gaining Momentum
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.inner}>
                Take action on your goals. Focus on accelerating the progress of
                your projects. Make forward strides. Catch onto the growing
                power of the moon.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={classes.background}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<WiMoonset className={classes.inner} />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className={classes.heading}>
                Waxing Gibbous
              </Typography>
              <Typography className={classes.secondaryHeading}>
                The Last Push
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.inner}>
                There are only a few days left before the full moon! Add to what
                you have been building the last few weeks. The time has almost
                arrived for fruition and maximum energy.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={classes.background}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<WiMoonset className={classes.inner} />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography className={classes.heading}>Full Moon</Typography>
              <Typography className={classes.secondaryHeading}>
                The Celebration
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.inner}>
                This is what you've been waiting for. You are naturally
                accelerated. Energy is flowing! Give thanks to what you have
                accomplished. Emotions are heightened.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={classes.background}
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<WiMoonset className={classes.inner} />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography className={classes.heading}>
                Waning Gibbous
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Time to Let Go
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.inner}>
                The moon's light is decreasing. This is the time to let go,
                release, retire. Take some time for introspection. Remove things
                from your life that are no longer serving you. Do not start new
                projects.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={classes.background}
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              expandIcon={<WiMoonset className={classes.inner} />}
              aria-controls="panel7bh-content"
              id="panel7bh-header"
            >
              <Typography className={classes.heading}>Last Quarter</Typography>
              <Typography className={classes.secondaryHeading}>
                Winding Down
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.inner}>
                Tie up loose ends and file things away from your projects.
                During this moon phase, you're self-aware and energized to break
                negative patterns.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={classes.background}
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              expandIcon={<WiMoonset className={classes.inner} />}
              aria-controls="panel8bh-content"
              id="panel8bh-header"
            >
              <Typography className={classes.heading}>
                Waning Crescent
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Relax, Rest, and Retreat
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.inner}>
                Perfect time to meditate, contemplate, and wind down. Let go and
                look inward. This is the best time to schedule major operations,
                waxing, or hair removal. There will be less blood loss and
                recuperation will be supported by the upcoming waxing moon.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
