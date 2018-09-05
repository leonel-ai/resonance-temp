import React from "react"
import ImageSlide from "../ImageSlide"
import liquefy from "./liquefy.jpg"

export default props => {
  return (
    <ImageSlide
      centered={false}
      colorScheme={"purple"}
      next={props.next}
      previous={props.previous}
    >
      <a href={liquefy}>
        <img
          alt={"Artwork: Kristen Zimmerman with Weyam Ghadbian for Liquefy"}
          src={liquefy}
          style={{
            margin: "0 auto",
            maxHeight: "calc(100vh - 200px)",
            maxWidth: "100%"
          }}
        />
      </a>
      <br />

      <cite>Artwork: Kristen Zimmerman with Weyam Ghadbian for Liquefy</cite>
    </ImageSlide>
  )
}
