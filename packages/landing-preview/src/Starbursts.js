import React from "react"
import { withStyles } from "material-ui"
import starburstLeft from "./images/res-burst-left.png"
import starburstRight from "./images/res-burst-right.png"

const styles = theme => ({
  starburstLeft: {
    position: "absolute",
    top: 100,
    left: 0,
    marginLeft: -200,
    zIndex: 2,
    overflow: "hidden"
  },
  starburstRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginBottom: -150,
    width: "calc(100vw / 3)",
    zIndex: 2,
    overflow: "hidden"
  },
  burst: {
    zIndex: 2
  },
  [theme.breakpoints.down("xs")]: {
    starburstRight: {
      // width: "70vw",
      // right: "-25vw",
      // bottom: "-20vw"
    },
    starburstLeft: {
      left: -230,
      top: -230,
      marginLeft: "inherit"
    }
  }
})

const Starbursts = props => {
  const { classes } = props
  return (
    <React.Fragment>
      <div className={classes.starburstLeft}>
        <img
          src={starburstLeft}
          alt="Starburst Graphic"
          className={classes.burst}
        />
      </div>
      <div className={classes.starburstRight}>
        <img
          src={starburstRight}
          alt="Starburst Graphic"
          className={classes.burst}
        />
      </div>
    </React.Fragment>
  )
}

export default withStyles(styles, { withTheme: true })(Starbursts)
