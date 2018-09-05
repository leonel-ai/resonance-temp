import { createSelector } from "reselect"
import Immutable from "immutable"
import * as userInfoSelectors from "../../userInfo/selectors"

const screenSelector = state => state.screenIdea

export const getIdeaId = createSelector(
  (state, props) => props,
  props => props.match.params.ideaId
)

export const getIdea = createSelector(
  screenSelector,
  getIdeaId,
  (state, id) => {
    const existingRecord = state.getIn(["ideas", id]) || Immutable.Map()
    return existingRecord.toJS()
  }
)

export const canEdit = createSelector(
  getIdea,
  userInfoSelectors.getUserDetails,
  (idea, user) => {
    if (!user.id) return false
    if (user.admin === true) return true
    if (user.id === idea.user.id) return true
    return false
  }
)

export const getIdeasForActionHub = createSelector(screenSelector, state => {
  const homepageIds = state.get("homepageIdeaIds")
  const ideas = homepageIds
    .map(id => {
      const record = state.getIn(["ideas", id]) || Immutable.Map()
      return record.toJS()
    })
    .filter(r => r.id)
  return ideas
})
