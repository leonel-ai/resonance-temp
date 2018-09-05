import React from "react"
import ImageSlide from "../ImageSlide"
import wakanda from "./wakanda.png"

export default props => {
  return (
    <ImageSlide centered={false} next={props.next} previous={props.previous}>
      <a href={wakanda}>
        <img
          alt={"Alitha Martinez in World of Wakanda"}
          src={wakanda}
          style={{
            margin: "0 auto",
            maxHeight: "calc(100vh - 200px)",
            maxWidth: "100%"
          }}
        />
      </a>
      <br />
      <cite>
        Artwork: Alitha Martinez in World of Wakanda by Roxane Gay, Ta-Nehisi
        Coates, & Alitha Martinez
      </cite>
    </ImageSlide>
  )
}
