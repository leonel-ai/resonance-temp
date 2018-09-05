import React, { Component } from "react"
import { withStyles } from "material-ui/styles"
import Grid from "material-ui/Grid"

const styles = theme => ({
  container: {
    backgroundColor: "#ffffff"
    // height: "100vh",
    // display: "grid"
    // gridTemplateColumns: "400px auto"
    // gridTemplateRows: "142px auto"
  },
  [theme.breakpoints.down("md")]: {
    height: "0"
  }
})

class Wrapper extends Component {
  render() {
    const { classes, menuContent, baseContent } = this.props
    return <div className={classes.container}>{this.props.children}</div>
  }
}

export default withStyles(styles, { withTheme: true })(Wrapper)
