import { createSelector } from "reselect"
import Immutable from "immutable"

const screenSelector = state => state.registration

export const isOpen = createSelector(screenSelector, state =>
  state.get("isOpen")
)

export const getEmail = createSelector(screenSelector, state =>
  state.get("email")
)
