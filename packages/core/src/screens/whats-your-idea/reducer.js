import makeReducer from "../../makeReducer"
import Immutable from "immutable"
import * as actions from "./actions"
import { fromJS } from "immutable"

const reducer = {}
const initialState = Immutable.fromJS({
  isExpanded: false
})

reducer[actions.EXPANSION_TOGGLED] = (state, event) =>
  state.set("isExpanded", !state.get("isExpanded"))

export default makeReducer(reducer, initialState)
