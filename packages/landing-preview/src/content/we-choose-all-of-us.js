import React from "react"
import ImageSlide from "../ImageSlide"
import howDoWeTransition from "./we-choose-all-of-us.jpg"
import Typography from "material-ui/Typography"

export default props => {
  return (
    <ImageSlide centered={false} next={props.next} previous={props.previous}>
      <div style={{ textAlign: "center" }}>
        <a href={howDoWeTransition}>
          <img
            alt={"How Do We Transition?"}
            src={howDoWeTransition}
            style={{
              margin: "0 auto",
              maxHeight: "calc(100vh - 200px)",
              maxWidth: "100%"
            }}
          />
        </a>
        <br />
        <Typography variant="body2" component="cite">
          Artwork: Kristen Zimmerman for Idaho We Choose All of Us Community of
          Purpose
        </Typography>
      </div>
    </ImageSlide>
  )
}
