import makeReducer from "../../makeReducer"
import Immutable from "immutable"
import * as actions from "./actions"
import * as userActions from "../../userInfo/actions"
import { fromJS } from "immutable"

const reducer = {}
const initialState = Immutable.fromJS({
  ideas: Immutable.Map(),
  homepageIdeaIds: Immutable.List()
})

reducer[actions.IDEA_RECEIVED] = (state, event) => {
  const { id, idea } = event
  return state.setIn(["ideas", id.toString()], Immutable.fromJS(idea))
}

reducer[actions.IDEAS_RECEIVED] = (state, event) => {
  const { ideas } = event
  let newState = state
  ideas.forEach(idea => {
    newState = newState.setIn(
      ["ideas", idea.id.toString()],
      Immutable.fromJS(idea)
    )
  })
  return newState.set("homepageIdeaIds", ideas.map(i => i.id))
}

reducer[userActions.TOKEN_RECEIVED] = (state, event) => initialState

export default makeReducer(reducer, initialState)
