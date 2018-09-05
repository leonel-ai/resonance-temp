import React from "react"
import QuoteSlide from "../QuoteSlide"

export default props => {
  return (
    <QuoteSlide
      quote={"WE CHOOSE ALL OF US | Community of purpose in Idaho"}
      next={props.next}
      previous={props.previous}
    />
  )
}
