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
      <Typography variant="display3">MOVE TO END VIOLENCE</Typography>
      <Typography paragraph>
        Move to End Violence, an operational program of the NoVo Foundation,
        supports “movement maker” leaders in the U.S. movement to end violence
        against girls and women to step back from their daily work to envision
        the change they want to see, imagine new strategies, and build the
        capacity needed to realize this change.
      </Typography>
      <Typography paragraph>
        In February 2017, 44 Movement Makers from the MEV program came together
        for a week, along with 29 former and current faculty and staff, and 10
        children and 10 caregivers for a movement gathering to build beloved
        community and generate alignment as they work together for liberation
        and an end to violence against girls and women. At the gathering, the
        movement makers explored strategies for collective action in the context
        of a new political landscape of mounting misogyny, racism, xenophobia,
        and violence.
      </Typography>
      <Typography paragraph>
        Together they deepened and honed a collective, long-term worldview that
        names the values they share, in contrast to the values expressed in the
        current dominant worldview. Envisioning the world they wish to create —
        rather than just what must be dismantled — provided the opportunity to
        imagine the big leaps that will be necessary in the evolution of a
        transformative path forward.
      </Typography>
    </PostSlide>
  )
}
