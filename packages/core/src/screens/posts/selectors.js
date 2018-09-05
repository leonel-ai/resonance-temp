import { createSelector } from "reselect"
import Immutable from "immutable"
const screenSelector = state => state.posts

export const isLoading = createSelector(screenSelector, state =>
  state.get("loading")
)

export const getPosts = createSelector(screenSelector, state => {
  return state
    .get("posts")
    .toList()
    .toJS()
})

export const getPostId = createSelector(
  (state, props) => props,
  props => props.match.params.postId
)

export const getPost = createSelector(
  screenSelector,
  getPostId,
  (state, id) => {
    const existingRecord =
      state.getIn(["posts", id.toString()]) || Immutable.Map()
    return existingRecord.toJS()
  }
)

export const getTags = createSelector(screenSelector, state => {
  return state.get("tags").toJS()
})
export const getCategorySelection = createSelector(screenSelector, state =>
  state.get("categorySelection")
)
export const getKeywordSelection = createSelector(screenSelector, state =>
  state.get("keywordSelection")
)
export const getMediaTypeSelection = createSelector(screenSelector, state =>
  state.get("mediaTypeSelection")
)
