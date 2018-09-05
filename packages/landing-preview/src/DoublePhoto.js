import React from "react"
import { Helmet } from "react-helmet"
import Typography from "material-ui/Typography"
import { withStyles } from "material-ui"
import PhotoStarbursts from "./PhotoStarbursts"
import Grid from "material-ui/Grid"
import ButtonLinks from "./ButtonLinks"
import RightButton from "./images/right-yellow.svg"
import LeftButton from "./images/left-yellow.svg"
import { Link } from "react-router-dom"
import Hidden from "material-ui/Hidden"

const styles = theme => ({
  slide: {
    backgroundColor: "#702077",
    height: "100vh",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    overflowY: "scroll",
    padding: 22
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
    padding: 10
  },

  container: {
    zIndex: 10,
    flexGrow: 1,
    alignItems: "center"
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
      width: "100%",
      height: "calc(30vh)",
      overflowY: "scroll"
    },
    container: {
      alignItems: "flex-start",
      backgroundColor: "rgba(216, 216, 216, 0.7)"
    },
    arrow: {
      width: "1rem",
      margin: "0.5rem"
    }
  },

  [theme.breakpoints.up("md")]: {
    container: {
      width: 800
    },
    centerColumn: {
      backgroundColor: "rgba(0,0,0,0)"
    },
    article: {
      height: 624,
      overflowY: "scroll",
      backgroundColor: "rgba(216, 216, 216, 0.7)"
    }
  },
  [theme.breakpoints.only("xs")]: {
    article: {
      width: "calc(100vw - 50px)",
      height: "calc(100vh - 400px)",
      marginTop: -10
    }
  }
})

const DoublePhoto = props => {
  const {
    classes,
    firstPhoto,
    firstText,
    secondPhoto,
    secondText,
    next,
    previous
  } = props
  return (
    <div className={classes.slide}>
      <PhotoStarbursts />

      <Helmet>
        <title>Resonance - Photos</title>
      </Helmet>

      <Grid
        container
        alignItems="center"
        className={classes.container}
        spacing={0}
      >
        <Grid
          item
          sm={1}
          hidden={{ only: "xs" }}
          className={classes.arrowGridLeft}
        >
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

        <Grid item sm={12} xs={12} md={7}>
          <div className={classes.photos}>
            <div
              style={{ backgroundImage: `url("${firstPhoto}")` }}
              className={classes.photo}
            />
            <Hidden smDown>
              <div className={classes.spacingBar} />

              <div
                style={{ backgroundImage: `url("${secondPhoto}")` }}
                className={classes.photo}
              />
            </Hidden>
          </div>
        </Grid>
        <Grid item xs={12} hidden={{ only: ["sm", "md", "lg", "xl"] }}>
          <Link to={previous}>
            {previous && (
              <img
                src={LeftButton}
                alt="Navigation Previous"
                style={{ float: "left" }}
                className={[classes.arrow, classes.smallArrow].join(" ")}
              />
            )}
          </Link>

          <Link to={next}>
            {next && (
              <img
                src={RightButton}
                alt="Navigation Next"
                style={{ float: "right" }}
                className={[classes.arrow, classes.smallArrow].join(" ")}
              />
            )}
          </Link>
        </Grid>
        <Grid item sm={12} md={3}>
          <div className={classes.article}>
            <Typography variant="body2" paragraph>
              {firstText}
            </Typography>
            <Typography variant="body2" paragraph>
              {secondText}
            </Typography>
          </div>
        </Grid>

        <Grid
          item
          xs={1}
          hidden={{ only: "xs" }}
          className={classes.arrowGridRight}
        >
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
      <ButtonLinks />
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(DoublePhoto)
