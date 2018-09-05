import makeReducer from "../../makeReducer"
import Immutable from "immutable"
import * as actions from "./actions"
import * as userActions from "../../userInfo/actions"
import { fromJS } from "immutable"

const reducer = {}
const initialState = Immutable.fromJS({
  isOpen: false,
  email: "",
  submitting: false
})

reducer[actions.REGISTRATION_OPEN] = (state, event) =>
  state.set("isOpen", !state.get("isOpen"))
reducer[actions.EMAIL_CHANGED] = (state, event) =>
  state.set("email", event.email)
reducer[userActions.TOKEN_RECEIVED] = (state, event) => initialState

export default makeReducer(reducer, initialState)
