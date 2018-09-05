import makeReducer from "../../makeReducer"
import Immutable from "immutable"
import * as actions from "./actions"

const reducer = {}
const initialState = Immutable.fromJS({
  open: false
})

reducer[actions.CONNECT_OPENED] = (state, event) => state.set("open", true)
reducer[actions.CONNECT_CLOSED] = (state, event) => state.set("open", false)

export default makeReducer(reducer, initialState)
