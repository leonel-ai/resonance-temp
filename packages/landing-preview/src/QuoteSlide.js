import React from "react"
import { Helmet } from "react-helmet"
import Typography from "material-ui/Typography"
import { withStyles } from "material-ui"
import ButtonLinks from "./ButtonLinks"
import RightButton from "./images/right-arrow.svg"
import LeftButton from "./images/left-arrow.svg"
import Grid from "material-ui/Grid"
import Starbursts from "./Starbursts"
import { Link } from "react-router-dom"

const styles = theme => ({
  slide: {
    backgroundColor: theme.colors.yellow,
    height: "100vh",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  titleText: {
    color: "#fc5724",
    fontSize: "4em",
    padding: "2rem"
  },
  purple: {
    backgroundColor: theme.colors.purple,
    color: theme.colors.yellow
  },
  arrow: {
    zIndex: 5,
    position: "relative"
  },
  quote: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    width: "calc(100% - 50px)",
    zIndex: 5
  },
  [theme.breakpoints.down("xs")]: {
    titleText: {
      fontSize: "2rem"
    }
  },
  [theme.breakpoints.down("sm")]: {
    arrow: {
      width: "1rem",
      margin: "0.5rem"
    }
  }
})

const QuoteSlide = props => {
  const { classes, quote, next, previous, colorScheme } = props
  return (
    <div className={[classes.slide, classes[colorScheme]].join(" ")}>
      <Helmet>
        <title>Resonance - {quote || ""}</title>
      </Helmet>
      <Starbursts />
      <div className={classes.quote}>
        <Grid container alignItems={"center"}>
          <Grid item xs={1}>
            {previous && (
              <Link to={previous}>
                <img
                  src={LeftButton}
                  alt="Navigation Previous"
                  className={classes.arrow}
                />
              </Link>
            )}
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant="display4"
              className={[classes.titleText, classes[colorScheme]].join(" ")}
            >
              {quote.split("|").map(q => <span key={q}>{q}</span>)}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            {next && (
              <Link to={next}>
                <img
                  src={RightButton}
                  alt="Navigation Next"
                  className={classes.arrow}
                />
              </Link>
            )}
          </Grid>
        </Grid>
      </div>

      <ButtonLinks />
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(QuoteSlide)
