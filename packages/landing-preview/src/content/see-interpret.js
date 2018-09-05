import React from "react"
import QuoteSlide from "../QuoteSlide"

export default props => {
  return <QuoteSlide
    next={props.next}
    previous={props.previous}
    quote="How do we see and interpret the world? What and whom do we center? What do we renew, plant, cultivate, and grow? Who and how will we be?"
  />
}
