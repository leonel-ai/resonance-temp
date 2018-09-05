import React from "react"
import ImageSlide from "../ImageSlide"
import worldview from "./worldview.jpg"

export default props => {
  return (
    <ImageSlide
      colorScheme={"yellow"}
      next={props.next}
      previous={props.previous}
    >
      <a href={worldview}>
        <img
          alt={"Worldview"}
          src={worldview}
          style={{ maxHeight: "calc(100vh - 100px)", maxWidth: "100%" }}
        />
      </a>
    </ImageSlide>
  )
}
