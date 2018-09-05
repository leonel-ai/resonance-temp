import React from "react"
import PostSlide from "../PostSlide"
import Typography from "material-ui/Typography"
import { withStyles } from "material-ui"

const styles = theme => ({
  purpose: {
    height: 760,
    overflowY: "auto"
  }
})
const Purpose = props => {
  const { classes } = props

  return (
    <PostSlide next={props.next} previous={props.previous}>
      <div className={classes.purpose}>
        <Typography variant="title" paragraph>
          The purpose of Resonance Network is to reimagine and practice what is
          possible and necessary to transform society from a culture of violence
          to one of interdependent worthiness and thriving.
        </Typography>

        <Typography variant="body2" paragraph>
          Resonance Network centers the power of people and communities who are
          disproportionately impacted by systems of oppression, invisibility,
          and erasure. We interrupt the roots, institutions, and conditions of
          violence that deeply impact girls, women, and gender oppressed people,
          and we create new generative conditions with powerful and liberated
          communities that are thriving, just, and accountable.
        </Typography>

        <Typography variant="body2" paragraph>
          Together, we leverage the possibilities of our whole selves. We are
          movement-builders, network-weavers, students, organizers, teachers,
          storytellers, engineers, healers, advocates, artists, and all those
          who are committed to hope for and work toward the thriving of future
          generations.
        </Typography>

        <Typography variant="body2" paragraph>
          As a network, we are engaging in strategies to enable a collective
          emerging worldview to flourish. Through our shared purpose, we are
          emboldened to practice new/renewed ways of being and doing, knowing
          that just “doing more” won’t make the deep shifts we need. We are
          generating purpose-aligned systems to support people to experiment
          collaboratively, take initiative in differentiated ways, and share
          learning.
        </Typography>
      </div>
    </PostSlide>
  )
}
export default withStyles(styles, { withTheme: true })(Purpose)
