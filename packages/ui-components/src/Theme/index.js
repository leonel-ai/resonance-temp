import React from "react"
import { MuiThemeProvider, jssPreset } from "material-ui/styles"
import JssProvider from "react-jss/lib/JssProvider"
import { create } from "jss"
import CssBaseline from "material-ui/CssBaseline"
import makeTheme from "./createMuiTheme"

const theme = makeTheme()


/// https://material-ui-next.com/customization/css-in-js/#other-html-element
const jss = create(jssPreset())
const createGenerateClassName = () => {
  let counter = 0
  return (rule, sheet) => `resonance--uicomponents--${rule.key}-${counter++}`
}
const generateClassName = createGenerateClassName()

export default props => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  </JssProvider>
)
