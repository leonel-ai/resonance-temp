import React from "react"
import Typography from "material-ui/Typography"
import PostSlide from "../PostSlide"

export default props => {
  const { next, previous } = props
  return (
    <PostSlide next={next} previous={previous}>
      <Typography variant="body2" paragraph>
        One of the gifts of sharp differences in views that happen at scale is
        that we can begin to see patterns. The dramatic differences that people
        have been feeling are not just about issues and candidates… the divide
        is about how people define and see and believe and act into what is
        ‘good’, what is ‘bad’, who ‘belongs’ and ‘doesn’t belong’, how things
        should ‘work’, what is ‘important’, what has ‘value’ and on and on. This
        is about different world views; it is fundamental, and crosses the
        spectrum of society.
      </Typography>
      <Typography variant="body2" paragraph>
        If we have a critique about what’s happening in the world, do we have a
        clear picture of the world that we want to create and move toward? An
        entirely new way of being is required to live fruitfully in and into
        these times. Creating into solutions that have not yet been imagined
        takes time, and resetting the very basic ways of living. The art of the
        possible begins with knowing what it is we want to live into!
      </Typography>
    </PostSlide>
  )
}
