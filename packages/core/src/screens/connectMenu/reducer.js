import makeReducer from "../../makeReducer"
import Immutable from "immutable"
import * as actions from "./actions"

const reducer = {}
const initialState = Immutable.fromJS({
  open: false
})

reducer[actions.MENU_OPENED] = (state, event) => state.set("open", true)
reducer[actions.MENU_CLOSED] = (state, event) => state.set("open", false)

export default makeReducer(reducer, initialState)
