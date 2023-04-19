import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 900,
    fontFamily: "Cuprum",
    backgroundColor: "transparent",
    textShadow: "2px 2px 5px black",
    border: "none",
    boxShadow: "none",
  },
  inner: {
    fontFamily: "Cuprum",
    color: "white",
    textShadow: "2px 2px 5px black",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 22,
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

const HoroscopeReading = ({ horoscope }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const signName = horoscope.sign;
  const upperCasedSignName = signName.charAt(0).toUpperCase() + signName.slice(1);
  const horoscopeInfo = horoscope.zodiac;
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
          >
            {upperCasedSignName}
          </Typography>
          <Typography variant="h6" component="h6" className={classes.inner}>
            {horoscopeInfo.about}
          </Typography>
          <Typography className={classes.pos}>
            Strengths {bull} {horoscopeInfo.strengths}
          </Typography>
          <Typography className={classes.pos}>
            Ruling Planet {bull} {horoscopeInfo.ruling_planet}
          </Typography>
          <Typography className={classes.pos}>
            Element {bull} {horoscopeInfo.element}
          </Typography>
          <Typography className={classes.pos}>
            Compatibility {bull} {horoscopeInfo.compatibility}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default HoroscopeReading;
