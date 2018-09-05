import React from "react"
import { withStyles } from "material-ui"
import CircleIcon from "material-ui-icons/FiberManualRecord"
import { NavLink as Link } from "react-router-dom"
import content from "./content"
import HowDoWe from "./content/how-do-we"
import RevolutionOfValues from "./content/revolution-of-values"
import FindingWings from "./content/finding-wings"
import WhatWillItTake from "./content/what-will-it-take"
import AllFree from "./content/all-free"

const styles = theme => ({
  activeLink: {
    color: "#fc5724 !important"
  },
  inactiveLink: {
    color: "white"
  },
  links: {
    zIndex: 10,
    position: "absolute",
    bottom: 0,
    display: "flex",
    alignItems: "center"
  },
  link: {
    fontSize: 24
  },
  chapter: {
    fontSize: 36
  },
  [theme.breakpoints.down("xs")]: {
    link: { fontSize: 12 },
    chapter: { fontSize: 18 }
  }
})

const isChapterLink = Komponent => {
  return (
    [
      HowDoWe,
      RevolutionOfValues,
      FindingWings,
      WhatWillItTake,
      AllFree
    ].indexOf(Komponent) >= 0
  )
}

const Links = props => {
  const { classes } = props

  return (
    <div className={classes.links}>
      {content.map((Komponent, i) => {
        return (
          <Link
            to={i === 0 ? "/" : `/${i}`}
            exact
            activeClassName={classes.activeLink}
            className={classes.inactiveLink}
          >
            <CircleIcon
              className={
                isChapterLink(Komponent) ? classes.chapter : classes.link
              }
            />
          </Link>
        )
      })}
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(Links)
