import React from "react"
import { withStyles } from "material-ui/styles"
import Typography from "material-ui/Typography"

const styles = theme => ({
  title: {
    margin: "50px 0 24px 0"
  }
})

const AboutPage = props => {
  const { classes } = props
  return (
    <div>
      <Typography variant="title" className={classes.title}>
        This is all about to change. The purpose of Resonance Network is to reimagine and practice what is
        possible and necessary to transform society from a culture of violence
        to one of interdependent worthiness and thriving.
      </Typography>
      <Typography variant="body2">
        Resonance Network participants are movement-builders, network-weavers,
        students, organizers, teachers, storytellers, engineers, healers,
        advocates, artists, and all those who are committed to hope for and work
        toward the thriving of future generations. Together, we …
        <ul>
          <li>
            Interrupt the roots and conditions of violence that deeply impact
            girls, women, and gender oppressed people.
          </li>
          <li>
            Center the power of people and communities who are
            disproportionately impacted by systems of oppression, invisibility,
            and erasure.
          </li>
          <li>
            Create new conditions with powerful and liberated communities that
            are thriving, just, and accountable.
          </li>
          <li>
            Support people to experiment collaboratively, take individual and
            collective action, and share learning.
          </li>
        </ul>
      </Typography>

      <Typography variant="body2">
        Resonance Network has defined our two-year strategic priorities based on
        learnings from seed activities and analysis of the current landscape.
      </Typography>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(AboutPage)
