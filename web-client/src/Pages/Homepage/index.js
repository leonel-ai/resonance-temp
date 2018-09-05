import React from "react"
import IdeaForm from "./IdeaForm"
import Slides from "./Slides"
import IdeaList from "./IdeaList"

export default props => {
  const { match } = props
  return (
    <React.Fragment>
      <Slides />
      <IdeaForm match={match} />
      <IdeaList />
    </React.Fragment>
  )
}
