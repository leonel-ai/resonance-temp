import makeReducer from "../../makeReducer"
import Immutable from "immutable"
import * as actions from "./actions"
import { fromJS } from "immutable"

const reducer = {}
const initialState = Immutable.fromJS({
  text: "",
  results: Immutable.List(),
  searched: false
})

reducer[actions.SEARCH_TEXT_CHANGED] = (state, event) =>
  state
    .set("text", event.text)
    .set("searched", false)
    .set("results", Immutable.List())
reducer[actions.SEARCH] = (state, event) =>
  state.set("loading", false).set("results", Immutable.List())
reducer[actions.SEARCH_RESULTS_RECEIVED] = (state, event) =>
  state.set("loading", true).set("results", Immutable.fromJS(event.results))

export default makeReducer(reducer, initialState)
