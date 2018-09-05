import React from "react"
import { withStyles } from "material-ui"
import Typography from "material-ui/Typography"
import CircleLinks from "../CircleLinks"
import Carousel from "nuka-carousel"
import ReactMarkdown from "react-markdown"
import SlidesBG from "../Assets/slides-bg.png"
import "./slider.css"

const styles = theme => ({
  background: {
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    backgroundImage: `url(${SlidesBG})`
  },
  textBlock: {
    color: theme.palette.primary.defaultText,
    fontWeight: "300",
    fontSize: "3.3rem",
    padding: "4rem"
  },
  highlight: {
    backgroundColor: theme.palette.primary.orange
  },
  [theme.breakpoints.down("lg")]: {
    textBlock: {
      fontSize: "2.45rem"
    }
  },
  [theme.breakpoints.down("sm")]: {
    background: {
      padding: 0,
      backgroundSize: "contain"
    }
  },
  [theme.breakpoints.up("sm")]: {
    background: {
      // height: "100%",
      padding: "10em 0"
    }
  }
})

const AboutContent = props => {
  const { classes, slides } = props

  return (
    <div className={classes.background}>
      <Carousel
        autoplay={true}
        autoplayInterval={5000}
        heightMode={"first"}
        renderCenterLeftControls={() => false}
        renderCenterRightControls={() => false}
      >
        {slides.map((slide, i) => {
          return (
            <Typography
              variant="subheading"
              className={classes.textBlock}
              key={i}
            >
              <ReactMarkdown source={slide} />
            </Typography>
          )
        })}
      </Carousel>
    </div>
  )
}
AboutContent.defaultProps = {
  slides: []
}

export default withStyles(styles, { withTheme: true })(AboutContent)
