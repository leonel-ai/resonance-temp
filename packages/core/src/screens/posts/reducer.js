import makeReducer from "../../makeReducer"
import Immutable from "immutable"
import * as actions from "./actions"
import { fromJS } from "immutable"

const reducer = {}
const initialState = Immutable.fromJS({
  posts: Immutable.Map(),
  tags: Immutable.List(),
  categorySelection: "",
  keywordSelection: "",
  mediaTypeSelection: ""
})

reducer[actions.POST_RECEIVED] = (state, event) => {
  const { id, post } = event
  return state.setIn(["posts", id.toString()], Immutable.fromJS(post))
}

reducer[actions.EDITOR_TITLE_CHANGED] = (state, event) => {
  const { title } = event
  return state.set("editorTitle", title)
}

reducer[actions.POSTS_RECEIVED] = (state, event) => {
  const { posts } = event
  let newState = state.set("posts", Immutable.Map())
  posts.forEach(post => {
    newState = newState.setIn(
      ["posts", post.id.toString()],
      Immutable.fromJS(post)
    )
  })
  return newState
}

reducer[actions.CATEGORY_SELECTION_CHANGED] = (state, event) =>
  state.set("categorySelection", event.category)

reducer[actions.KEYWORD_SELECTION_CHANGED] = (state, event) =>
  state.set("keywordSelection", event.keyword)

reducer[actions.TAGS_RECEIVED] = (state, event) =>
  state.set("tags", Immutable.fromJS(event.tags))

reducer[actions.MEDIA_TYPE_SELECTION_CHANGED] = (state, event) =>
  state.set("mediaTypeSelection", event.mediaType)

export default makeReducer(reducer, initialState)
