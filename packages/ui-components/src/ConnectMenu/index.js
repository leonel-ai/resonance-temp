import React, { Component } from "react"
import { withStyles } from "material-ui"
import Grid from "material-ui/Grid"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import IconButton from "material-ui/IconButton"
import ButtonBase from "material-ui/ButtonBase"
import XIcon from "../Assets/xIcon"

const styles = theme => ({
  connectDisplayWrapper: {
    backgroundColor: theme.palette.primary.main,
    zIndex: 3000,
    position: "absolute",
    top: 150,
    width: "100%",
    height: "100%"
  },

  [theme.breakpoints.up("lg")]: {
    connectDisplayWrapper: {
      position: "absolute",
      left: 400,
      top: 0,
      width: "calc(100vw - 400px)"
    }
  },

  contentWrapper: {
    marginTop: "12rem", //moves the whole content box down
    padding: "0 8rem 0 5rem"
  },
  topRow: {
    marginBottom: "3rem"
  },
  itemText: {
    color: theme.palette.primary.orange,
    textAlign: "left",
    fontSize: "3rem"
  },
  buttonBase: {
    border: "6px solid #ff5d45",
    padding: "0.4rem 1.4rem"
  },
  buttonText: {
    color: theme.palette.primary.defaultText,
    fontSize: "1.3rem"
  },
  closeButton: {
    fontSize: "3.5rem",
    marginTop: "0",
    cursor: "pointer"
  },
  [theme.breakpoints.down("lg")]: {
    itemText: {
      fontSize: "2.8rem"
    },
    closeButton: {
      fontSize: "3.5rem",
      marginTop: "0"
    },
    buttonText: {
      fontSize: "1rem"
    }
  },
  [theme.breakpoints.down("md")]: {
    connectDisplayWrapper: {
      height: "81vh"
    },
    contentWrapper: {
      marginTop: "10rem",
      padding: "0 3rem 0 3rem"
    }
  },
  [theme.breakpoints.down("sm")]: {
    contentWrapper: {
      marginTop: "5rem"
    },
    topRow: {
      marginBottom: "1rem"
    },
    itemText: {
      fontSize: "1.5rem"
    },
    closeButton: {
      fontSize: "2rem",
      marginTop: "0"
    },
    buttonText: {
      fontSize: "0.7rem"
    },
    buttonBase: {
      border: "1.9px solid #ff5d45",
      padding: "0.3rem 0.6rem"
    }
  },
  [theme.breakpoints.down("xs")]: {
    contentWrapper: {
      padding: "0 1.5rem 0 1.5rem"
    },
    itemText: {
      fontSize: "1.3rem"
    },
    closeButton: {
      fontSize: "1.5rem",
      marginTop: "0"
    },
    buttonText: {
      fontSize: "0.6rem"
    },
    buttonBase: {
      padding: "0.2rem 0.5rem"
    }
  }
})

class ConnectMenu extends Component {
  render() {
    const { classes, handleConnectMenuClose } = this.props
    return (
      <div className={classes.connectDisplayWrapper}>
        <Grid
          container
          direction="row"
          wrap="wrap"
          alignContent="center"
          className={classes.contentWrapper}
        >
          <Grid
            xl={10}
            lg={11}
            md={10}
            sm={10}
            xs={11}
            item
            className={classes.topRow}
          >
            <Typography className={classes.itemText} variant="headline">
              What do you want to do?
            </Typography>
          </Grid>
          <Grid
            xl={2}
            lg={1}
            md={2}
            sm={2}
            xs={1}
            item
            className={classes.topRow}
          >
            <XIcon
              className={classes.closeButton}
              onClick={handleConnectMenuClose}
            />
          </Grid>
          <Grid lg={4} md={4} sm={4} xs={4} item>
            <ButtonBase className={classes.buttonBase}>
              <Typography
                component="span"
                variant="button"
                className={classes.buttonText}
              >
                Connect Item
              </Typography>
            </ButtonBase>
          </Grid>
          <Grid lg={4} md={4} sm={4} xs={4} item>
            <ButtonBase className={classes.buttonBase}>
              <Typography
                component="span"
                variant="button"
                className={classes.buttonText}
              >
                Connect Item
              </Typography>
            </ButtonBase>
          </Grid>
          <Grid lg={4} md={4} sm={4} xs={4} item>
            <ButtonBase className={classes.buttonBase}>
              <Typography
                component="span"
                variant="button"
                className={classes.buttonText}
              >
                Connect Item
              </Typography>
            </ButtonBase>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ConnectMenu)
