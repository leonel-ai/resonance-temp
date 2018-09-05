import UIComponents from "ui-components"
import { connect } from "react-redux"
import Core from "core"

const LostPassword = UIComponents.lostPassword

const mapState = (state, props) => {
  return {
    email: Core.screenSignIn.selectors.getEmail(state, props),
    emailSent: Core.screenSignIn.selectors.hasEmailSent(state, props)
  }
}

const mapDispatch = dispatch => {
  return {
    onEmailChange: value =>
      dispatch({ type: Core.screenSignIn.actions.EMAIL_CHANGED, value }),
    onSubmit: () => dispatch({ type: Core.screenSignIn.actions.RESET_PASSWORD })
  }
}

export default connect(mapState, mapDispatch)(LostPassword)
