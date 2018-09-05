import React from "react"
import ImageSlide from "../ImageSlide"
import worldIsCreating from "./world-is-creating.jpg"

export default props => {
  return (
    <ImageSlide
      centered={false}
      colorScheme={"yellow"}
      next={props.next}
      previous={props.previous}
    >
      <a href={worldIsCreating}>
        <img
          alt="World Is Creating"
          src={worldIsCreating}
          style={{
            margin: "0 auto",
            maxHeight: "calc(100vh - 200px)",
            maxWidth: "100%",
            display: "block",
            marginTop: "3em"
          }}
        />
      </a>
      <cite>
        Artwork: Kristen Zimmerman and Weyam Ghadbian for Movement Strategy
        Center
      </cite>
    </ImageSlide>
  )
}
