import React from "react"
import { withStyles } from "material-ui"
import starburstLeft from "./images/res-burst-left.svg"
import starburstRight from "./images/res-burst-right.svg"
import Hidden from "material-ui/Hidden"

const styles = theme => ({
  starburstLeft: {
    position: "absolute",
    left: 80,
    top: 80,
    width: "calc(100vw / 3)",
    zIndex: 2
  },
  starburstRight: {
    position: "absolute",
    left: 840,
    top: 400,
    width: "calc(100vw / 3)",
    zIndex: 2
  },
  [theme.breakpoints.only("sm")]: {
    starburstRight: {
      bottom: 50,
      right: 50,
      top: "inherit",
      left: "inherit"
    },
    starburstLeft: {
      bottom: "inherit",
      right: "inherit",
      top: -30,
      left: -30
    }
  },
  [theme.breakpoints.down("xs")]: {
    starburstRight: {
      width: "70vw",
      right: "-25vw",
      bottom: "-20vw",
      left: "inherit",
      top: "inherit"
    },
    starburstLeft: {
      width: 200,
      left: -10,
      top: -50
    }
  }
})

const Starbursts = props => {
  const { classes } = props
  return (
    <React.Fragment>
      <img
        src={starburstLeft}
        alt="Starburst Graphic"
        className={classes.starburstLeft}
      />
      <Hidden smDown>
        <img
          src={starburstRight}
          alt="Starburst Graphic"
          className={classes.starburstRight}
        />
      </Hidden>
    </React.Fragment>
  )
}

export default withStyles(styles, { withTheme: true })(Starbursts)
