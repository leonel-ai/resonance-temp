import makeReducer from "../makeReducer"
import Immutable from "immutable"
import * as actions from "./actions"
import { fromJS } from "immutable"

const reducer = {}
const initialState = Immutable.Map()

reducer[actions.PROFILE_RECEIVED] = (state, event) => {
  const profile = Immutable.fromJS(event.profile)
  const id = event.id.toString()
  return state.set(id, profile)
}

export default makeReducer(reducer, initialState)
