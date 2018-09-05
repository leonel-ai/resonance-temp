import React from "react"
import Typography from "material-ui/Typography"
import PostSlide from "../PostSlide"

export default props => {
  const { next, previous } = props
  return (
    <PostSlide next={next} previous={previous}>
      <Typography variant="body2" paragraph>
        Many of us have been in conversation — we as Resonance Network, but also
        reverberating across many other overlapping communities, networks, and
        gatherings — about the world we want to live in, the world that we all
        deserve. It’s a world that’s rooted in our shared humanity, where we
        deeply feel a sense of belonging and community, where we are
        interconnected and living in harmony with other peoples and the planet.
        It’s a world where our wishes for our children and grandchildren, and
        all those who will come after us, blossom and bear fruit.
      </Typography>
      <Typography variant="body2" paragraph>
        We find ourselves in a time of transition. Our communities are bearing
        the brunt of an apparent upsurgence in the existing worldview that is
        centered in domination, supremacy, violence, and materialism, and that
        is being fueled by fear and greed. We are exploring how to hold the
        urgency of our anger and despair while also building toward a world
        rooted in love, asking what we can do and how we must be differently to
        meet the crisis and opportunity of this transition.
      </Typography>
    </PostSlide>
  )
}
