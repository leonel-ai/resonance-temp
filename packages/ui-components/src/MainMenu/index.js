import React from "react"
import { withStyles } from "material-ui/styles"
import Grid from "material-ui/Grid"
import Paper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import IconButton from "material-ui/IconButton"
import XIcon from "../Assets/xIcon.js"

const styles = theme => ({
  mainMenuWrapper: {
    backgroundColor: "#f2f2f2",
    zIndex: 3000,
    height: "100%",
    position: "absolute",
    top: 150,
    width: "100%"
  },
  [theme.breakpoints.up("lg")]: {
    mainMenuWrapper: {
      position: "absolute",
      left: 400,
      top: 0,
      width: "calc(100vw - 400px)"
    }
  },
  contentWrapper: {
    margin: "5.5rem 0 0 3rem"
  },
  item: {
    backgroundColor: theme.palette.primary.purple,
    color: theme.palette.primary.orange,
    cursor: "pointer"
  },
  itemText: {
    color: "inherit",
    textAlign: "left",
    padding: "0 0.5rem 0 2rem",
    fontSize: "4rem",
    display: "block",
    "& > a": {
      color: "#f85a49",
      background: "#863582",
      padding: "6px 17px",
      textDecoration: "none",
      "&:hover": {
        color: "white"
      }
    }
  },
  closeButton: {
    fontSize: "4rem",
    marginTop: "2rem",
    marginRight: "2rem",
    cursor: "pointer",
    float: "right"
  },
  [theme.breakpoints.down("lg")]: {
    contentWrapper: {
      margin: "7.5rem 0 0 3rem"
    },
    itemText: {
      fontSize: "5rem"
    },
    closeButton: {
      fontSize: "4.5rem",
      marginTop: "0.5rem"
    }
  },
  [theme.breakpoints.down("md")]: {
    contentWrapper: {
      margin: "3rem 0 0 0"
    },
    item: {
      margin: "0 0 0 3rem"
    },
    itemText: {
      fontSize: "6rem"
    },
    closeButton: {
      fontSize: "3.5rem"
    },
    [theme.breakpoints.down("sm")]: {
      contentWrapper: {
        margin: "1rem 0 0 0"
      },
      item: {
        margin: "0 0 0 2rem"
      },
      itemText: {
        fontSize: "3rem",
        padding: "0 0 0 1rem"
      },
      closeButton: {
        fontSize: "2rem"
      }
    },
    [theme.breakpoints.down("xs")]: {
      itemText: {
        fontSize: "2.5rem"
      }
    }
  }
})

const MainMenu = props => {
  const { classes, handleMenuClose, items } = props
  return (
    <div className={classes.mainMenuWrapper}>
      <XIcon onClick={handleMenuClose} className={classes.closeButton} />
      <div className={classes.contentWrapper}>
        {items.map((element, i) => {
          return (
            <Typography
              key={`item-${i}`}
              className={classes.itemText}
              variant="display4"
              gutterBottom
            >
              {element}
            </Typography>
          )
        })}
      </div>
    </div>
  )
}

MainMenu.defaultProps = {
  items: []
}

export default withStyles(styles, { withTheme: true })(MainMenu)
