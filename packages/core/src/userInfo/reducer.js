import makeReducer from "../makeReducer"
import Immutable from "immutable"
import * as actions from "./actions"
import jwtDecode from "jwt-decode"

const reducer = {}
const initialState = Immutable.fromJS({
  signedIn: false,
  token: false,
  details: {}
})

reducer[actions.PROFILE_RECEIVED] = (state, event) => {
  const profile = event.profile
  return state.set("details", Immutable.fromJS(profile))
}

reducer[actions.TOKEN_RECEIVED] = (state, event) => {
  try {
    const token = event.user.jwt
    const details = jwtDecode(token)
    return state
      .set("signedIn", true)
      .set("token", token)
      .set("details", Immutable.fromJS(details))
  } catch (e) {
    console.debug({ e })
    return initialState
  }
}

reducer[actions.TOKEN_REVOKED] = (state, event) => {
  return initialState
}

export default makeReducer(reducer, initialState)
