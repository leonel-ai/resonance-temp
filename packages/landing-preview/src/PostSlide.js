import React from "react"
import { Helmet } from "react-helmet"
import { withStyles } from "material-ui"
import PhotoStarbursts from "./Starbursts"
import Grid from "material-ui/Grid"
import ButtonLinks from "./ButtonLinks"
import RightButtonYellow from "./images/right-yellow.svg"
import LeftButtonYellow from "./images/left-yellow.svg"
import RightButtonWhite from "./images/right-arrow.svg"
import LeftButtonWhite from "./images/left-arrow.svg"
import { Link } from "react-router-dom"

const styles = theme => ({
  slide: {
    backgroundColor: theme.colors.purple,
    height: "100vh",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    overflowY: "scroll",
    padding: 22
  },
  yellow: {
    backgroundColor: theme.colors.yellow,
    color: theme.colors.purple
  },
  photos: {},
  spacingBar: {
    height: 40
  },
  photo: {
    height: 292,
    backgroundSize: "cover"
  },
  article: {
    border: "solid 0 #979797",
    textAlign: "left",
    padding: 30,
    fontSize: "1.5em !important",
    overflowY: "scroll"
  },
  articleNotCentered: {
    display: "block"
  },

  container: {
    zIndex: 10,
    flexGrow: 1,
    alignItems: "center"
  },
  containerMiddle: {
    margin: "0 auto"
  },

  centerColumn: {
    backgroundColor: "rgba(216, 216, 216, 0.7)"
  },

  [theme.breakpoints.only("sm")]: {
    arrowGridLeft: {
      position: "absolute",
      left: 30,
      top: "50%"
    },
    arrowGridRight: {
      position: "absolute",
      right: 30,
      top: "50%"
    },
    container: {
      margin: 50
    },
    slide: {
      padding: "80px 100px"
    },
    arrow: {
      width: "1rem",
      margin: "1rem"
    }
  },

  [theme.breakpoints.down("sm")]: {
    article: {
      // width: "100%",
      overflowY: "scroll"
    },
    container: {
      // alignItems: "flex-start",
      backgroundColor: "rgba(216, 216, 216, 0.7)",
      overflow: "auto"
    },
    arrow: {
      width: "1rem",
      margin: "0.5rem"
    }
  },

  [theme.breakpoints.up("md")]: {
    container: {},
    centerColumn: {
      backgroundColor: "rgba(0,0,0,0)"
    },
    article: {
      height: 800,
      // width: 960,
      margin: "0 auto",
      overflowY: "scroll",
      backgroundColor: "rgba(216, 216, 216, 0.7)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  },
  [theme.breakpoints.only("xs")]: {
    article: {
      height: "90vh"
      // width: "calc(100vw - 50px)",
      // marginTop: -10
    }
  }
})

const DoublePhoto = props => {
  const { classes, children, next, previous, centered, colorScheme } = props
  return (
    <div className={["article", classes.slide, classes[colorScheme]].join(" ")}>
      <PhotoStarbursts />
      <Helmet>
        <title>Resonance - Post</title>
      </Helmet>
      <Grid
        container
        alignItems="center"
        className={classes.container}
        spacing={0}
      >
        <Grid item xs={1} sm={1} className={classes.arrowGridLeft}>
          {previous && (
            <Link to={previous}>
              <img
                src={
                  colorScheme === "yellow" ? LeftButtonWhite : LeftButtonYellow
                }
                alt="Navigation Previous"
                className={classes.arrow}
              />
            </Link>
          )}
        </Grid>

        <Grid item xs={10} sm={10} md={10} className={classes.containerMiddle}>
          <div
            className={[
              classes.article,
              centered !== true ? classes.articleNotCentered : ""
            ].join(" ")}
          >
            {children}
          </div>
        </Grid>

        <Grid item xs={1} sm={1} className={classes.arrowGridRight}>
          {next && (
            <Link to={next}>
              <img
                src={
                  colorScheme === "yellow"
                    ? RightButtonWhite
                    : RightButtonYellow
                }
                alt="Navigation Next"
                className={classes.arrow}
              />
            </Link>
          )}
        </Grid>
      </Grid>
      <ButtonLinks />
    </div>
  )
}

DoublePhoto.defaultProps = {
  centered: true
}

export default withStyles(styles, { withTheme: true })(DoublePhoto)
