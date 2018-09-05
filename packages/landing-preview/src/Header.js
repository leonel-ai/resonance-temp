import React from "react"
import { withStyles } from "material-ui"
import Typography from "material-ui/Typography"

const styles = theme => ({
  header: {
    background: "#702077",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    position: "absolute",
    top: 0,
    zIndex: 24,
    width: "100%"
  },
  type: {
    color: "white",
    fontSize: 17
  },
  [theme.breakpoints.down("xs")]: {
    header: {
      height: 50
    },
    type: {
      fontSize: 12
    }
  }
})

const Header = props => {
  const { classes } = props
  return (
    <header className={classes.header}>
      <a href="http://eepurl.com/c8PgFv">
        <Typography component="h5" className={classes.type}>
          Be the first to know about our launch
        </Typography>
      </a>
    </header>
  )
}

export default withStyles(styles, { withTheme: true })(Header)
