import React, { Component } from "react"
import UIComponents from "ui-components"
import { connect } from "react-redux"
import Core from "core"

class Profile extends Component {
  componentDidMount() {
    this.props.onMount(this.props.id)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.props.onMount(this.props.id)
    }
  }
  render() {
    const { currentUserId, profile } = this.props
    return <UIComponents.Profile currentUserId={currentUserId} {...profile} />
  }
}

const mapState = (state, props) => ({
  id: Core.profiles.selectors.getProfileId(state, props),
  currentUserId: Core.userInfo.selectors.getUserId(state, props),
  profile: Core.profiles.selectors.getProfile(state, props)
})

const mapDispatch = dispatch => {
  return {
    onMount: id => dispatch({ type: Core.profiles.actions.FETCH_PROFILE, id })
  }
}

export default connect(mapState, mapDispatch)(Profile)
