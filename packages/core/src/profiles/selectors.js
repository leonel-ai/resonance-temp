import { createSelector } from "reselect"
import Immutable from "immutable"

const screenSelector = state => state.profiles

export const getProfileId = (state, props) => props.match.params.profileId

export const getProfile = createSelector(
  screenSelector,
  getProfileId,
  (state, id) => {
    return state.get(id, Immutable.Map()).toJS()
  }
)
