import React from 'react'
import "../App.css"
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {GiGems} from "react-icons/gi"

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "transparent",
    boxShadow: "1px 1px 7px white"
  },
  gems: {
    height: "0.75em",
    width: "0.75em",
    color: "white"
  },
    root: {
      width: '100%',
      fontFamily: "Cuprum"
    },
    inner: {
      fontFamily: "Cuprum",
      color: "white"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      fontFamily: "Cuprum",
      color: "white"
    },
  }));

export default function TarotReading({deal}) {
    const classes = useStyles();

    return (
        <div>
            <div className="dealt-cards">
            <div className="one-card">
              <h3>The Past</h3>
              <p>{deal[0].name}</p>
              <img src={process.env.PUBLIC_URL + `/cards/${deal[0].img}`}  alt="tarot-card"/>
            
      <Accordion className={classes.background}>
        <AccordionSummary
          expandIcon={<GiGems className={classes.gems}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Card Meaning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.inner}>
          {deal[0].meanings.light.join('. ')}.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.background}>
        <AccordionSummary
          expandIcon={<GiGems className={classes.gems}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Keywords</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.inner}>
          {deal[0].keywords.join(', ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    
            <div className="one-card"><h3>The Present</h3><p>{deal[1].name}</p><img src={process.env.PUBLIC_URL + `/cards/${deal[1].img}`}  alt="tarot-card"/>
            <Accordion className={classes.background}>
        <AccordionSummary
          expandIcon={<GiGems className={classes.gems} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Card Meaning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.inner}>
          {deal[1].meanings.light.join('. ')}.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.background}>
        <AccordionSummary
          expandIcon={<GiGems className={classes.gems} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Keywords</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.inner}>
          {deal[1].keywords.join(', ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.background}>
        <AccordionSummary
          expandIcon={<GiGems className={classes.gems} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Fortune Telling</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.inner}>
          {deal[1].fortune_telling.join('. ')}.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.background}>
        <AccordionSummary
          expandIcon={<GiGems className={classes.gems}/>}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Questions to Ask Yourself</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.inner}>
          {deal[1].Questions_to_Ask.join(' ')}
          </Typography>
        </AccordionDetails>
      </Accordion></div>
            <div className="one-card"><h3>The Future</h3><p>{deal[2].name}</p><img src={process.env.PUBLIC_URL + `/cards/${deal[2].img}`}  alt="tarot-card"/>
            <Accordion className={classes.background}>
        <AccordionSummary
          expandIcon={<GiGems className={classes.gems}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Card Meaning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.inner}>
          {deal[2].meanings.light.join('. ')}.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.background}>
        <AccordionSummary
          expandIcon={<GiGems className={classes.gems}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Keywords</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.inner}>
          {deal[2].keywords.join(', ')}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.background}>
        <AccordionSummary
          expandIcon={<GiGems className={classes.gems}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Fortune Telling</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.inner}>
          {deal[2].fortune_telling.join('. ')}.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
            </div>
        </div>
    )
}
