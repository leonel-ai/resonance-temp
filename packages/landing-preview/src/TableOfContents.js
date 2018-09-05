import React from "react"
import { withStyles } from "material-ui"
import { Close } from "material-ui-icons"
import { Link } from "react-router-dom"
import Typography from "material-ui/Typography"
import content from "./content"
import HowDoWe from "./content/how-do-we"
import RevolutionOfValues from "./content/revolution-of-values"
import FindingWings from "./content/finding-wings"
import WhatWillItTake from "./content/what-will-it-take"
import AllFree from "./content/all-free"

const styles = theme => ({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflowY: "scroll",
    backgroundColor: "rgba(84, 83, 83, 0.7)",
    zIndex: 25
  },
  icons: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 26,
    color: "white"
  },
  icon: {
    cursor: "pointer",
    marginTop: "0.25em",
    marginRight: "0.25em",
    fontSize: "3em"
  },
  article: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  links: {
    listStyle: "none",
    textAlign: "center",
    marginLeft: 0,
    paddingLeft: 0
  },
  link: {
    color: "white",
    marginTop: "2em",
    lineHeight: "1.5em",
    textDecoration: "none",
    fontSize: "2em",
    display: "block"
  },
  [theme.breakpoints.down("xs")]: {
    link: {
      marginTop: "1.5em",
      lineHeight: "1.2em",
      fontSize: "1.2em"
    }
  }
})

const linkFor = Komponent => {
  return `/${content.indexOf(Komponent)}`
}

const TableOfContents = props => {
  const { classes, onClose } = props

  return (
    <div className={classes.root}>
      <div className={classes.icons}>
        <Close className={classes.icon} onClick={onClose} />
      </div>

      <article className={classes.article}>
        <Typography variant="body2" paragraph>
          <ul className={classes.links}>
            <li>
              <Link
                className={classes.link}
                to={linkFor(HowDoWe)}
                onClick={onClose}
              >
                How Do We Transition?
              </Link>
            </li>
            <li>
              <Link
                className={classes.link}
                to={linkFor(RevolutionOfValues)}
                onClick={onClose}
              >
                A Revolution Of Values.
              </Link>
            </li>
            <li>
              <Link
                className={classes.link}
                to={linkFor(FindingWings)}
                onClick={onClose}
              >
                Finding Our Wings To Take Flight.
              </Link>
            </li>
            <li>
              <Link
                className={classes.link}
                to={linkFor(WhatWillItTake)}
                onClick={onClose}
              >
                What Will It Take?
              </Link>
            </li>
            <li>
              <Link
                className={classes.link}
                to={linkFor(AllFree)}
                onClick={onClose}
              >
                What Does It Look Like When We Are All Free?
              </Link>
            </li>
          </ul>
        </Typography>
      </article>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(TableOfContents)
