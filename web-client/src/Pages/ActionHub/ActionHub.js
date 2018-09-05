import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import Core from "core"
import UIComponents from "ui-components"

const ActionHubPage = UIComponents.actionHub.ActionHubPage

class ActionHub extends Component {
  componentWillMount() {
    this.props.onLoad()
  }
  render() {
    const { ideas, onIdeaSelection, match } = this.props
    return (
      <div>
        <ActionHubPage
          ideas={ideas}
          onIdeaSelection={onIdeaSelection}
          match={match}
        />
      </div>
    )
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

export default connect(mapState, mapDispatch)(ActionHub)
