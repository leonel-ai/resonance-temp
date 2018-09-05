import React, { Component } from "react"
import { withStyles } from "material-ui/styles"
import Grid from "material-ui/Grid"
import Typography from "material-ui/Typography"
import PostCard from "./PostCard"

const styles = theme => ({
  componentWrapper: {
    height: "100vh",
    padding: "5rem 1rem 0 1rem"
  },
  cardWrapper: {
    height: "inherit"
  }
})

class BasePostScreen extends Component {
  static defaultProps = {
    posts: []
  }
  render() {
    const { classes, posts, generatePostLink } = this.props

    if (posts.length === 0) {
      return <Typography variant="display2">No Posts Found</Typography>
    }

    return (
      <Grid
        className={classes.cardWrapper}
        container
        direction="row"
        wrap="wrap"
        alignContent="flex-start"
        spacing={40}
      >
        {posts.map((post, index) => {
          return (
            <Grid item lg={4} key={post.id}>
              <PostCard
                key={post.id}
                postLink={generatePostLink(post)}
                {...post}
              />
            </Grid>
          )
        })}
      </Grid>
    )
  }
}

export default withStyles(styles, { withTheme: true })(BasePostScreen)
