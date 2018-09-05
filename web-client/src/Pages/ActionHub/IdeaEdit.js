import React, { Component } from "react"
import { connect } from "react-redux"
import Core from "core"
import { push } from "react-router-redux"
import IdeaForm from "../Homepage/IdeaForm"

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
    const { idea, canEdit, formProps } = this.props
    return <IdeaForm idea={idea} canEdit={canEdit} {...formProps} />
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

  const onDestroy = () => {
    const yayOrNay = window.confirm("Delete this idea?")
    if (yayOrNay) {
      dispatch({ type: Core.whatsYourIdea.actions.DESTROY_IDEA, id })
    }
  }

  const editIdea = () => dispatch(push(`/ideas/${id}/edit`))
  return {
    ...stateProps,
    ...ownProps,
    onLoad,
    editIdea,
    formProps: {
      match: ownProps.match,
      onSubmit: data =>
        dispatch({
          type: Core.whatsYourIdea.actions.SUBMIT_IDEA_FORM,
          id,
          data
        }),
      onDestroy
    }
  }
}

export default connect(mapState, null, merge)(WrappedIdea)
