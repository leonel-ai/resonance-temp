import { createSelector } from "reselect"
import Immutable from "immutable"

const screenSelector = state => state.whatsYourIdea

export const isExpanded = createSelector(screenSelector, state =>
  state.get("isExpanded")
)
