import React from "react"
import PostSlide from "../PostSlide"
import Typography from "material-ui/Typography"

export default props => {
  return (
    <PostSlide
      centered={false}
      colorScheme={"yellow"}
      next={props.next}
      previous={props.previous}
    >
      <Typography variant="display3">
        TRANSITIONS COMMUNITY, Movement Strategy Center
      </Typography>

      <Typography variant="body2" paragraph>
        Over the past few years, the Movement Strategy Center’s Transitions
        Community has been probing the fundamental question, “what will it take
        to transition from a world of domination and extraction to a world of
        regeneration, resilience, and interdependence?” Through transitions
        “labs,” members of this community have been generating visions for who
        we need to be, what it will take, and how we will get there.
      </Typography>
      <Typography variant="body2" paragraph>
        This vision took on the task of creating a 100-year arc of the
        transition into this new world, but also explored what milestones we
        will need to reach at the 50-year, 25-year, 12-year, and 5- year points
        to get there — in other words, what are we already doing, and what do we
        need to be doing now to make our way through that 100-year arc?
      </Typography>
    </PostSlide>
  )
}
