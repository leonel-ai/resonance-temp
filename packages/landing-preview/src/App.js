import React, { Component } from "react"
import { Helmet } from "react-helmet"
import CssBaseline from "material-ui/CssBaseline"
import { MuiThemeProvider, withStyles } from "material-ui"
import theme from "./theme.js"
import Router from "react-router-dom/BrowserRouter"
import Route from "react-router-dom/Route"
import { Menu } from "material-ui-icons"
import TableOfContents from "./TableOfContents"
import content from "./content"
import "./body.css"
import screenshot from "./images/screenshot.png"

const styles = {
  App: {
    overflowY: "hidden"
  },
  slides: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    overflowY: "scroll"
  },
  icons: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 5,
    color: "white"
  },
  icon: {
    cursor: "pointer",
    marginTop: "0.25em",
    marginRight: "0.25em",
    fontSize: "3em"
  },
  [theme.breakpoints.down("xs")]: {
    icon: {
      marginTop: "0.8em",
      fontSize: "1.25em"
    }
  }
}

class App extends Component {
  state = {
    mainMenuOpen: false
  }
  toggleMenu = () => {
    this.setState({ mainMenuOpen: !this.state.mainMenuOpen })
  }
  render() {
    const { mainMenuOpen } = this.state
    const { classes } = this.props
    return (
      <div className={classes.App}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Resonance</title>
          <meta
            name="description"
            content="Resonance: Preview of Landing Page"
          />
          <meta name="robots" content="noindex" />
          <meta property="og:image" content={screenshot} />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Resonance: Preview of Landing Page"
          />
        </Helmet>

        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div className={classes.icons}>
            {!mainMenuOpen && (
              <Menu className={classes.icon} onClick={this.toggleMenu} />
            )}
          </div>

          <div className={classes.slides}>
            <Router>
              <React.Fragment>
                {mainMenuOpen && <TableOfContents onClose={this.toggleMenu} />}
                {content.map((Komponent, i) => {
                  const path = i === 0 ? "/" : `/${i}`
                  const next = i === content.length - 1 ? "/" : `/${i + 1}`
                  let previous = i === 0 ? `/${content.length - 1}` : `${i - 1}`
                  if (previous === "0") previous = "/"
                  return (
                    <Route
                      exact
                      path={path}
                      key={`komponent${i}`}
                      render={props => (
                        <Komponent next={next} previous={previous} />
                      )}
                    />
                  )
                })}
              </React.Fragment>
            </Router>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default withStyles(styles)(App)
