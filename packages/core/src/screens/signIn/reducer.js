import makeReducer from "../../makeReducer"
import Immutable from "immutable"
import * as actions from "./actions"
import userInfo from "../../userInfo"

const reducer = {}
const initialState = Immutable.fromJS({
  email: "",
  password: "",
  loading: false,
  emailSent: false
})

reducer[actions.EMAIL_CHANGED] = (state, event) => {
  return state.set("email", event.value)
}
reducer[actions.PASSWORD_CHANGED] = (state, event) => {
  return state.set("password", event.value)
}
reducer[actions.PASSWORD_RESET_EMAIL_SENT] = (state, event) => {
  return state.set("emailSent", true)
}
reducer[actions.RESET_PASSWORD] = (state, event) =>
  state.set("emailSent", false)

reducer[userInfo.actions.TOKEN_RECEIVED] = (state, event) => initialState
reducer[userInfo.actions.AUTHENTICATE_USER] = (state, event) => {
  return state.set("loading", true)
}
reducer[userInfo.actions.AUTHENTICATION_FAILED] = (state, event) => {
  return state.set("loading", false)
}
export default makeReducer(reducer, initialState)
