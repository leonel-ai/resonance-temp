import React, { Component } from "react"
import Core from "core"
import { connect } from "react-redux"

class LostPasswordApply extends Component {
  componentDidMount() {
    const { token } = this.props
    this.props.verifyToken(token)
  }
  render() {
    return <div>...</div>
  }
}

const mapState = (state, ownProps) => {
  return {
    token: ownProps.match.params.token
  }
}

const mapDispatch = dispatch => {
  return {
    verifyToken: token =>
      dispatch({ type: Core.screenSignIn.actions.VERIFY_RESET_TOKEN, token })
  }
}

export default connect(mapState, mapDispatch)(LostPasswordApply)
