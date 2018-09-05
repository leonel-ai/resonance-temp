import React from "react"
import ImageSlide from "../ImageSlide"
import weArePeopleWho from "./we-are-people-who.jpg"

export default props => {
  return (
    <ImageSlide
      centered={false}
      colorScheme={"yellow"}
      next={props.next}
      previous={props.previous}
    >
      <a href={weArePeopleWho}>
        <img
          alt={"We Are People Who"}
          src={weArePeopleWho}
          style={{
            margin: "0 auto",
            maxHeight: "calc(100vh - 200px)",
            maxWidth: "100%",
            display: "block",
            marginTop: "3em"
          }}
        />
      </a>
      <cite>Artwork: Kristen Zimmerman for the Movement Strategy Center</cite>
    </ImageSlide>
  )
}
