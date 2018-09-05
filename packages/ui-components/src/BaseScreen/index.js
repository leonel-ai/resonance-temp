import React, { Component } from "react"
import { withStyles } from "material-ui/styles"
import Grid from "material-ui/Grid"
import Typography from "material-ui/Typography"
import Paper from "material-ui/Paper"

const styles = theme => ({
  root: {
    background:
      "linear-gradient(to right, #942d81 33.33%, #013a48 33.33%,#013a48 66.66%, #ffe76a 66.66%)"
    // height: "100vh"
  },
  contentWrapper: {
    // height: "100vh"
  },
  [theme.breakpoints.down("md")]: {
    contentWrapper: {
      alignItems: "flex-start"
    }
  },
  [theme.breakpoints.down("sm")]: {
    root: {
      background: "linear-gradient(to right, #942d81 50%, #013a48 50%,#013a48)"
    }
  }
})

class BaseScreen extends Component {
  render() {
    const { classes, children } = this.props
    return (
      <Grid item xl={9} lg={9} md={12} sm={12} xs={12} className={classes.root}>
        <Grid
          className={classes.contentWrapper}
          container
          direction="row"
          justify="center"
          alignItems="center"
          wrap="wrap"
        >
          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles, { withTheme: true })(BaseScreen)
