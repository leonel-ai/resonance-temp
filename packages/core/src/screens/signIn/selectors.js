import { createSelector } from "reselect"

const screenSelector = state => state.screenSignIn

export const isLoading = createSelector(screenSelector, state =>
  state.get("loading")
)

export const getEmail = createSelector(screenSelector, state =>
  state.get("email")
)

export const getPassword = createSelector(screenSelector, state =>
  state.get("password")
)

export const hasEmailSent = createSelector(screenSelector, state =>
  state.get("emailSent")
)
