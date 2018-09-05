import React from "react"
import QuoteSlide from "../QuoteSlide"

export default props => {
  return (
    <QuoteSlide
      colorScheme={"purple"}
      next={props.next}
      previous={props.previous}
      quote="WHAT DOES IT LOOK LIKE WHEN WE ARE ALL FREE?"
    />
  )
}
