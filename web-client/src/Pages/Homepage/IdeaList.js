import React, { Component } from "react"
import UIComponents from "ui-components"
import { connect } from "react-redux"
import Core from "core"
import { push } from "react-router-redux"

const ActionHub = UIComponents.actionHub.HomePageIdeas

class HomePageActionHub extends Component {
  componentDidMount() {
    this.props.onLoad()
  }
  render() {
    return <ActionHub {...this.props} />
  }
}

const mapState = (state, props) => {
  return {
    ideas: Core.screenIdea.selectors.getIdeasForActionHub(state, props)
  }
}
const mapDispatch = dispatch => {
  return {
    onIdeaSelection: idea => dispatch(push(`/act/${idea.id}`)),
    onLoad: () =>
      dispatch({ type: Core.screenIdea.actions.FETCH_ACTION_HUB_IDEAS })
  }
}

export default connect(mapState, mapDispatch)(HomePageActionHub)
