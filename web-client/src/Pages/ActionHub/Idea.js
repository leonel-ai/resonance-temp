import React, { Component } from "react"
import UIComponents from "ui-components"
import { connect } from "react-redux"
import Core from "core"
import { push } from "react-router-redux"
import { DiscussionEmbed } from "disqus-react"

class WrappedIdea extends Component {
  componentDidMount() {
    this.props.onLoad()
  }
  componentDidUpdate(newProps) {
    if (newProps.id !== this.props.id) {
      this.props.onLoad()
    }
  }
  render() {
    const { id, title } = this.props
    const disqusConfig = {
      url: window.location.href,
      identifier: id,
      title: title
    }

    return (
      <UIComponents.actionHub.Idea {...this.props}>
        <DiscussionEmbed
          shortname={"resonance-network-org"}
          config={disqusConfig}
        />
      </UIComponents.actionHub.Idea>
    )
  }
}

const mapState = (state, props) => {
  return {
    id: Core.screenIdea.selectors.getIdeaId(state, props),
    idea: Core.screenIdea.selectors.getIdea(state, props),
    canEdit: Core.screenIdea.selectors.canEdit(state, props)
  }
}

const merge = (stateProps, { dispatch }, ownProps) => {
  const { id } = stateProps
  const onLoad = () =>
    dispatch({ type: Core.screenIdea.actions.FETCH_IDEA, id })

  const editIdea = () => dispatch(push(`/act/${id}/edit`))
  return {
    ...stateProps,
    onLoad,
    editIdea
  }
}

export default connect(mapState, null, merge)(WrappedIdea)
