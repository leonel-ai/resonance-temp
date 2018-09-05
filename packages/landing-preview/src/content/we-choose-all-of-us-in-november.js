import React from "react"
import PostSlide from "../PostSlide"
import Typography from "material-ui/Typography"

export default props => {
  return (
    <PostSlide next={props.next} previous={props.previous}>
      <Typography variant="body2" paragraph>
        In November 2016, a gathering of community in Boise, Idaho joined
        together out of hunger for a new way of being, and a desire to create a
        new future and narrative for Idaho and beyond. The initial group of over
        50 people delved into the question of who they wanted to be amidst deep
        division, and over the course of several months created the poetic
        vision of We Choose All of Us.
      </Typography>
      <blockquote>
        <Typography variant="body2">
          Each month, we came together and All of Us was welcome. We breathed
          and moved together. We sat in circle and shared the stories of our
          whole selves - the stories of our names, all our names; the stories of
          our people and their resilience. When hard truths were shared, we
          turned to wonder.
        </Typography>
      </blockquote>
    </PostSlide>
  )
}
