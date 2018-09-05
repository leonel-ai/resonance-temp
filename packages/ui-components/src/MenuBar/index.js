import React, { Component } from "react"
import { withStyles } from "material-ui/styles"
import Paper from "material-ui/Paper"
import Grid from "material-ui/Grid"
import Typography from "material-ui/Typography"
import IconButton from "material-ui/IconButton"
import Button from "material-ui/Button"
import Drawer from "material-ui/Drawer"
import Hidden from "material-ui/Hidden"
import MenuIcon from "../Assets/menuIcon.js"

import logo from "../Assets/logo.png"
import burst from "../Assets/res-burst-left-n.svg"
import MenuButton from "../Assets/menu-icon.svg"
import burstTab from "../Assets/burst-left-tab.svg"
import burstMobile from "../Assets/burst-mobile.svg"
import burstLeft from "../Assets/burst-left.png"

const horizontalStyles = theme => ({
  horizontalBar: {
    backgroundColor: "#f2f2f2",
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    height: 142,
    display: "flex",
    justifyContent: "space-around",
    alignItem: "center",
    background: `url(${burstTab}) no-repeat`,
    backgroundPosition: "left top"
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: 20,
    cursor: "pointer"
  },
  menuIcon: {
    cursor: "pointer"
  },
  botButton: {
    fontFamily: "GT-Pressura",
    fontSize: "1.7rem",
    textTransform: "capitalize"
  }
})

const verticalStyles = theme => ({
  verticalBar: {
    backgroundColor: "#f2f2f2",
    height: "100vh",
    width: 400,
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    paddingTop: "8vh",
    textAlign: "center",
    display: "grid",
    gridTemplateRows: "250px auto 200px"
  },
  starBurst: {
    background: `url(${burstLeft}) no-repeat`,
    backgroundPosition: "0% 60%",
    backgroundSize: "45%"
  },
  logo: {
    width: 300,
    cursor: "pointer"
  },
  menuIcon: {
    cursor: "pointer",
    width: 63,
    height: 24
  },
  botButton: {
    fontFamily: "GT-Pressura",
    fontSize: "1.7rem",
    textTransform: "capitalize",
    position: "absolute",
    bottom: 150,
    left: 130
  }
})

const VerticalBar = props => {
  const { classes, onMenuClick, onConnectClick, onLogoClick } = props

  return (
    <div className={classes.verticalBar}>
      <div style={{ padding: "1vh" }}>
        <img
          onClick={onLogoClick}
          src={logo}
          alt="Logo"
          className={classes.logo}
        />
        <div>
          <img
            src={MenuButton}
            className={classes.menuIcon}
            onClick={onMenuClick}
          />
        </div>
      </div>
      <div className={classes.starBurst} />
      <Button
        size="large"
        className={classes.botButton}
        onClick={onConnectClick}
      >
        Connect
      </Button>
    </div>
  )
}

const HorizontalBar = props => {
  const { classes, onMenuClick, onConnectClick, onLogoClick } = props

  return (
    <div className={classes.horizontalBar}>
      <img
        src={MenuButton}
        className={classes.menuIcon}
        onClick={onMenuClick}
      />
      <img
        onClick={onLogoClick}
        src={logo}
        alt="Logo"
        className={classes.logo}
      />
      <Button
        size="large"
        className={classes.botButton}
        onClick={onConnectClick}
      >
        Connect
      </Button>
    </div>
  )
}

class MenuBar extends Component {
  render() {
    const { onMenuClick, onConnectClick, onLogoClick } = this.props
    return (
      <React.Fragment>
        <Hidden lgUp>
          <StyledHorizontalBar
            onMenuClick={onMenuClick}
            onConnectClick={onConnectClick}
            onLogoClick={onLogoClick}
          />
        </Hidden>
        <Hidden mdDown>
          <StyledVerticalBar
            onMenuClick={onMenuClick}
            onConnectClick={onConnectClick}
            onLogoClick={onLogoClick}
          />
        </Hidden>
      </React.Fragment>
    )
  }
}

const StyledHorizontalBar = withStyles(horizontalStyles, { withTheme: true })(
  HorizontalBar
)
const StyledVerticalBar = withStyles(verticalStyles, { withTheme: true })(
  VerticalBar
)

export default MenuBar
