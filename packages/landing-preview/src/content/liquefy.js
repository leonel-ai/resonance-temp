import React from "react"
import PostSlide from "../PostSlide"
import Typography from "material-ui/Typography"

export default props => {
  return (
    <PostSlide
      centered={false}
      colorScheme={"purple"}
      next={props.next}
      previous={props.previous}
    >
      <Typography variant="display3">LIQUEFY</Typography>

      <Typography variant="body2" paragraph>
        Since 2015, leaders of national organizations and state coalitions
        against domestic and sexual violence have been coming together to
        explore how the U.S. anti-movement, and the state coalitions in
        particular, can come together collectively around a shared purpose of
        changing societal values that perpetuate gender violence, cultivating
        environments whereby people thrive through systems that are free from
        oppression, generating conditions in which every girl can reach her full
        potential, and creating a world with freedom, justice, dignity, and
        peace for all.
      </Typography>

      <Typography variant="body2" paragraph>
        In May 2017, they explored a 100-year arc of transformation and what it
        means for the U.S. movement to end violence against women and girls.
        This vision explores questions of what a world in which gender-based
        violence is not a given could look like, and what would be necessary to
        enable that transformation, including what individual and group
        practices would need to be in place in the daily lives.
      </Typography>
    </PostSlide>
  )
}
