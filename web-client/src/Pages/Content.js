import React from "react"
import { withStyles } from "material-ui/styles"
const styles = theme => ({
  [theme.breakpoints.down("md")]: {
    content: {
      position: "absolute",
      left: 0,
      top: 140,
      right: 0,
      bottom: 0,
      overflow: "auto"
    }
  },
  [theme.breakpoints.up("lg")]: {
    content: {
      position: "absolute",
      left: 400,
      top: 0,
      right: 0,
      bottom: 0,
      overflow: "auto"
    }
  }
})

const Content = props => {
  return <div className={props.classes.content}>{props.children}</div>
}

export default withStyles(styles, { withTheme: true })(Content)
