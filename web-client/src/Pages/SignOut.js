import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Core from "core"

class SignOut extends React.Component {
  componentDidMount() {
    this.props.onMount()
  }
  render() {
    return <Redirect to="/" />
  }
}

const mapState = (state, props) => {
  return {
    isUserAuthenticated: Core.userInfo.selectors.isUserAuthenticated(
      state,
      props
    )
  }
}

const mapDispatch = dispatch => {
  return {
    onMount: () => dispatch({ type: Core.userInfo.actions.TOKEN_REVOKED })
  }
}

export default connect(mapState, mapDispatch)(SignOut)
