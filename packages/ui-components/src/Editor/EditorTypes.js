import React from "react"
import { withStyles } from "material-ui/styles"
import Typography from "material-ui/Typography"

const styles = theme => ({
  typeSelection: {
    margin: 30,
    padding: "150px 175px",
    background: "#d8d8d8",
    flexGrow: 1,
    fontSize: 25,
    textAlign: "center",
    cursor: "pointer",
    border: "5px solid #d8d8d8",
    "&:hover": {
      border: "5px solid white",
      color: "white"
    }
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  }
})
const Types = props => {
  const { classes, availableTypes, onEditorTypeSelection } = props

  return (
    <div className={classes.container}>
      {availableTypes.map(type => {
        return (
          <div
            key={type}
            className={classes.typeSelection}
            onClick={() => onEditorTypeSelection(type)}
          >
            {type}
          </div>
        )
      })}
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(Types)
