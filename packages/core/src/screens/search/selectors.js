import { createSelector } from "reselect"
import Immutable from "immutable"

const screenSelector = state => state.screenSearch

export const hasSearched = createSelector(screenSelector, state =>
  state.get("searched")
)

export const getSearchText = createSelector(screenSelector, state =>
  state.get("text")
)

export const getResults = createSelector(screenSelector, state =>
  state.get("results").toJS()
)
