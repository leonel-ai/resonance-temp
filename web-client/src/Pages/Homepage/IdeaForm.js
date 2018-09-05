import React from "react"
import UIComponents from "ui-components"
import { connect } from "react-redux"
import Core from "core"
import { reduxForm } from "redux-form"
import { Link } from "react-router-dom"

const mapState = (state, props) => {
  return {
    initialValues: Core.screenIdea.selectors.getIdea(state, props),
    isExpanded: Core.whatsYourIdea.selectors.isExpanded(state, props),
    logInLink: <Link to="/log-in">Log In</Link>,
    registrationIsOpen: Core.registration.selectors.isOpen(state, props),
    registrationEmail: Core.registration.selectors.getEmail(state, props)
  }
}

const merge = (stateProps, { dispatch }, ownProps) => {
  const onSubmit = data =>
    dispatch({ type: Core.whatsYourIdea.actions.SUBMIT_IDEA_FORM, data })
  const onExpansionToggle = () =>
    dispatch({ type: Core.whatsYourIdea.actions.EXPANSION_TOGGLED })
  const onRegistrationToggle = () =>
    dispatch({ type: Core.registration.actions.REGISTRATION_OPEN })
  const onRegistrationEmailChange = email =>
    dispatch({ type: Core.registration.actions.EMAIL_CHANGED, email })
  const onRegistrationSubmit = () =>
    dispatch({ type: Core.registration.actions.REGISTER_USER })

  return {
    ...stateProps,
    onSubmit,
    onExpansionToggle,
    onRegistrationToggle,
    onRegistrationEmailChange,
    onRegistrationSubmit,
    ...ownProps
  }
}
const WhatsYourIdeaForm = reduxForm({ form: "whatsYourIdea" })(
  UIComponents.whatsYourIdea
)

export default connect(mapState, null, merge)(WhatsYourIdeaForm)
