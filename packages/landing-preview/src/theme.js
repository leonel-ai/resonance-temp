import { createMuiTheme } from "material-ui/styles"
import "./fonts/fonts.css"

const theme = createMuiTheme({
  colors: {
    purple: "#702077",
    yellow: "#fcdc32"
  },
  typography: {
    fontFamily: '"Atlas Grotesk Web","Helvetica Neue",Arial,sans-serif',
    fontWeightMedium: 400,
    body2: {
      fontSize: "1.0rem",
      textAlign: "center",
      marginTop: "1rem",
      marginBottom: "1rem"
    },
    headline: {
      fontFamily: "GT-Pressura-Bold"
    },
    title: {
      fontFamily: "GT-Pressura-Bold",
      textAlign: "center"
    },
    display1: {
      fontFamily: "GT-Pressura-Bold"
    },
    display2: {
      fontFamily: "GT-Pressura-Bold"
    },
    display3: {
      fontFamily: "GT-Pressura-Bold",
      textAlign: "center"
    },
    display4: {
      fontFamily: "GT-Pressura-Bold",
      color: "#702077",
      textAlign: "center"
    }
  }
})
export default theme
