import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 800,
    fontFamily: "Cuprum",
    backgroundColor: "transparent",
    textShadow: "2px 2px 10px black",
    border: "none",
    boxShadow: "none",
  },
  inner: {
    fontFamily: "Cuprum",
    color: "white",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    fontFamily: "Cuprum",
    color: "white",
    marginTop: 6,
  },
  pos: {
    marginTop: 10,
    fontFamily: "Cuprum",
    color: "white",
  },
});

export default function HoroscopeReading({horoscope}) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    let signName = horoscope[1]
    let upperCasedSignName = signName.charAt(0).toUpperCase() + signName.slice(1)
    return (
        <div>
      <Card className={classes.root} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Today's {upperCasedSignName} Horoscope
        </Typography>
        <Typography variant="h5" component="h2" className={classes.inner}>
        {horoscope[0].description}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Mood {bull} {horoscope[0].mood}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Color {bull} {horoscope[0].color}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Lucky Number {bull} {horoscope[0].lucky_number}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Compatibility {bull} {horoscope[0].compatibility}
        </Typography>
      </CardContent>
      </Card>
        </div>
    )
}
