import UIComponents from "ui-components"
import { connect } from "react-redux"
import Core from "core"
import { reduxForm } from "redux-form"

const mapState = (state, props) => {
  const user = Core.userInfo.selectors.getUserDetails(state, props)

  const ownSelector = {
    match: {
      params: {
        profileId: user.id.toString()
      }
    }
  }
  return {
    initialValues: Core.profiles.selectors.getProfile(state, ownSelector)
  }
}

const merge = (stateProps, { dispatch }, ownProps) => {
  const onSubmit = data =>
    dispatch({ type: Core.userInfo.actions.SUBMIT_FORM, data })

  return {
    ...stateProps,
    onSubmit,
    ...ownProps
  }
}
const EnhancedProfileForm = reduxForm({ form: "userProfile" })(
  UIComponents.ProfileForm
)

export default connect(mapState, null, merge)(EnhancedProfileForm)
