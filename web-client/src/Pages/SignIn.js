import React from "react"
import UIComponents from "ui-components"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Core from "core"

const SignIn = UIComponents.signIn

const WrappedSignIn = props => {
  const { isUserAuthenticated } = props
  if (isUserAuthenticated) {
    return <Redirect to="/" />
  }
  return <SignIn {...props} />
}

const mapState = (state, props) => {
  return {
    isUserAuthenticated: Core.userInfo.selectors.isUserAuthenticated(
      state,
      props
    ),
    email: Core.screenSignIn.selectors.getEmail(state, props),
    password: Core.screenSignIn.selectors.getPassword(state, props)
  }
}

const mapDispatch = dispatch => {
  return {
    onEmailChange: value =>
      dispatch({ type: Core.screenSignIn.actions.EMAIL_CHANGED, value }),
    onPasswordChange: value =>
      dispatch({ type: Core.screenSignIn.actions.PASSWORD_CHANGED, value }),
    onSubmit: () => dispatch({ type: Core.userInfo.actions.AUTHENTICATE_USER })
  }
}

export default connect(mapState, mapDispatch)(WrappedSignIn)
