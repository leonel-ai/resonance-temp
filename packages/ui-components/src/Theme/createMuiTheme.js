import { createMuiTheme } from "material-ui/styles"
import "../fonts/fonts.css"

export default () =>
  createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 768,
        lg: 1024,
        xl: 1440
      }
    },
    typography: {
      fontFamily: '"Atlas Grotesk Web","Helvetica Neue",Arial,sans-serif',
      fontWeightMedium: 400,
      button: {
        fontFamily: "Atlas Grotesk Web",
        textTransform: "capitalize"
      },
      caption: {
        fontFamily: "Atlas Grotesk Web"
      },
      body1: {
        fontFamily: "Atlas Grotesk Web"
      },
      body2: {
        fontFamily: "Atlas Grotesk Web"
      },
      subheading: {
        fontFamily: "GT-Pressura"
      },
      title: {
        fontFamily: "GT-Pressura"
      },
      headline: {
        fontFamily: "GT-Pressura-Bold"
      },
      title: {
        fontFamily: "GT-Pressura-Bold"
      },
      display1: {
        fontFamily: "GT-Pressura-Bold"
      },
      display2: {
        fontFamily: "GT-Pressura-Bold"
      },
      display3: {
        fontFamily: "GT-Pressura-Bold"
      },
      display4: {
        fontFamily: "GT-Pressura-Bold",
        color: "#702077",
        textAlign: "center"
      }
    },
    palette: {
      background: {
        default: "#ffffff"
      },
      common: {
        white: "#ffffff"
      },
      primary: {
        grey: "#d8d8d8",
        darkBlue: "#013a48",
        purple: "#942d81",
        orange: "#ff5d45",
        yellow: "#ffe76a",
        defaultText: "#ffffff",
        main: "#942d81" //dark purple color
      }
    }
  })
