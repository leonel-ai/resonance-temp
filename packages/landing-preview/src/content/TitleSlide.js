import React from "react"
import { Helmet } from "react-helmet"
import Typography from "material-ui/Typography"
import { withStyles } from "material-ui"
import logo from "../images/logo.png"
import downArrow from "../images/down-chevron.svg"
import { Link } from "react-router-dom"
import Starbursts from "../Starbursts"
import Header from "../Header"

const styles = theme => ({
  slide: {
    backgroundColor: "#fcdc32",
    height: "100vh",
    textAlign: "center"
  },
  logo: {
    marginTop: "calc(100vh / 5)",
    marginBottom: 100,
    width: "20vw",
    maxWidth: "85%",
    zIndex: 3
  },
  downArrow: {
    marginTop: 20,
    cursor: "pointer"
  },
  [theme.breakpoints.down("xs")]: {
    logo: {
      width: "inherit",
      marginTop: 200,
      marginBottom: 10,
      maxWidth: 200
    },
    titleText: {
      fontSize: "3rem"
    }
  }
})

const TitleSlide = props => {
  const { classes } = props
  return (
    <div className={classes.slide}>
      <Helmet>
        <title>Resonance - How did we get here?</title>
      </Helmet>
      <Header />

      <Starbursts />
      <img alt="Resonance Logo" src={logo} className={classes.logo} />
      <Typography variant="display4" className={classes.titleText}>
        WORLDVIEW.<br />COSMOVISION.
      </Typography>
      <Link to="/1">
        <img src={downArrow} alt="Down Arrow" className={classes.downArrow} />
      </Link>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(TitleSlide)
