import React from "react"
import { withStyles } from "material-ui"
import Typopgraphy from "material-ui/Typography"
import Grid from "material-ui/Grid"
import { Idea } from "./ActionHubPage"

const styles = theme => ({
  container: {
    background: "#ffe84d",
    padding: 6 * theme.spacing.unit
  }
})

const HomepageIdeas = props => {
  const { classes, ideas, onIdeaSelection } = props
  return (
    <div className={classes.container}>
      <Grid container spacing={40}>
        {ideas.map(idea => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={idea.id}>
            <Idea {...idea} onClick={onIdeaSelection} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

HomepageIdeas.defaultProps = {
  ideas: []
}

export default withStyles(styles, { withTheme: true })(HomepageIdeas)
