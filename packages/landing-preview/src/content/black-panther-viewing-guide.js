import React from "react"
import PostSlide from "../PostSlide"
import Typography from "material-ui/Typography"
import { withStyles } from "material-ui"

const styles = theme => ({
  guide: {
    height: 760,
    overflowY: "auto"
  }
})
const Guide = props => {
  const { classes } = props
  return (
    <PostSlide next={props.next} previous={props.previous}>
      <div className={classes.guide}>
        <Typography variant="display3">
          BLACK PANTHER VIEWING GUIDE - by INTELLIGENT MISCHIEF, MOBILIZE THE
          IMMIGRANT VOTE, AND MOVEMENT STRATEGY CENTER{" "}
        </Typography>

        <Typography variant="body2" paragraph>
          Upon the release of the wildly successful Black Panther movie,
          cultural strategists from Intelligent Mischief, Mobilize the Immigrant
          Vote, and Movement Strategy Center collaborated on a viewing and
          discussion guide focused on how Wakanda demonstrates the possibilities
          of a liberated world.
        </Typography>
        <Typography variant="body2" paragraph>
          The Black Panther viewing guide points to arts, and popular culture in
          particular, as a means by which we can envision ourselves in the story
          of a different future. As the authors of the guide put it, "Seeing
          Wakanda brought to life on the screen can help our communities to see
          and then further imagine what our own communities might look like when
          we are free.”
        </Typography>
        <blockquote>
          <Typography>
            “This viewing guide is intended to support you in using the
            concepts, imagery and principles of Black Panther to imagine and
            engage your communities in creating a blueprint for #FreedomCities,
            cities and communities in which communities of color, queer, trans,
            immigrants and Muslims are free and thriving.”
          </Typography>
        </blockquote>
      </div>
    </PostSlide>
  )
}

export default withStyles(styles, { withTheme: true })(Guide)
