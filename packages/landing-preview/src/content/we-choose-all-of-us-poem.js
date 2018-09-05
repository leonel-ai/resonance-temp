import React from "react"
import Typography from "material-ui/Typography"
import PostSlide from "../PostSlide"
import { withStyles } from "material-ui"

const styles = theme => ({
  poem: {
    height: 760,
    overflowY: "auto"
  }
})

const Poem = props => {
  const { classes } = props
  return (
    <PostSlide centered={false} next={props.next} previous={props.previous}>
      <div className={classes.poem}>
        <Typography variant="display3">We choose all of us. </Typography>
        <Typography variant="body2">
          We are a people who choose <br />
          A world where everyone is valued <br />
          where everyone is safe <br />
          where everyone can thrive. <br />
          A world where love is love and kindness is everything. <br />
          Nothing less than this. <br />
          Every day we choose love <br />
          and in this love everyone belongs to beloved <br />
          community. <br />
          Everyone. <br />
          We are whole human beings, <br />
          we believe in our collective humanity and our deep <br />
          connections to all living things, to air, water, fire, and <br />
          earth that sustain us. <br />
          In our wholeness we are many branches of one family, <br />
          one community, one people with many roots. <br />
          We are those who no longer remain in physical form, <br />
          and those who do not yet exist in body, <br />
          the fallen trees and dried rivers, the dandelion seeds <br />
          who have yet to sprout. <br />
          We will create the world we want to see and <br />
          move forward with courageous love and mutual <br />
          responsibility. <br />
          We are all part of this story. <br />
          We believe in the power of what we speak and sing, <br />
          in connection, in transformative conversations. <br />
          We choose to tell the whole story, <br />
          in all its pain, fear, and poison, <br />
          healing the wounds that constrain our dreams. <br />
          We believe listening will transform hearts and minds, <br />
          cultures and systems. <br />
          When believe when we imagine together, we can <br />
          achieve the unimaginable. <br />
          Together, we can change everything. <br />
          We commit to bringing forth a world rooted in <br />
          interdependence, resilience, and regeneration. <br />
          We commit to weaving together our stories and our <br />
          hearts. <br />
          We commit to finding our way back to our ancestors, <br />
          ourselves, and each other; <br />
          through kindness, <br />
          through strength, <br />
          through community, <br />
          and through love. <br />
          We will value and respect each other. <br />
          We will see our interconnectedness and honor our <br />
          differences. <br />
          We will celebrate each other and listen deeply; hear <br />
          and be heard. <br />
          When we are struggling, we will struggle together <br />
          to become a part of something bigger than ourselves. <br />
          We will live into this new story of Idaho <br />
          With sacred responsibility, in silence, <br />
          We look to the stars for lessons of interconnection, <br />
          And abiding spirit. <br />
          We believe in the wonder of what wholeness can look <br />
          like; the small glimmers of this place, first; and then <br />
          the soft voice, growing stronger and clearer, until this <br />
          world is fully realized. <br />
          Our choices have power. <br />
          We will be bold. <br />
          We invite you in. <br />
          We choose all of us. <br />
        </Typography>
      </div>
    </PostSlide>
  )
}
export default withStyles(styles, { withTheme: true })(Poem)
