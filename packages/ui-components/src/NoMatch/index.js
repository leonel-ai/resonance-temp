import React from "react"
import { withStyles } from "material-ui"
import Typopgraphy from "material-ui/Typography"
const styles = {
  container: {
    marginTop: "30vh"
  }
}
const NoMatch = props => {
  const { classes } = props
  return (
    <div className={classes.container}>
      <Typopgraphy variant="display4">404</Typopgraphy>
      <Typopgraphy variant="display1">There's no page here (yet)</Typopgraphy>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(NoMatch)
