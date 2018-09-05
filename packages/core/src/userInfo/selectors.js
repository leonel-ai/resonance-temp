import { createSelector } from "reselect"
import { parse, isBefore } from "date-fns"

const userInfo = state => state.userInfo

export const isUserAuthenticated = createSelector(userInfo, userInfo => {
  if (userInfo.get("signedIn") === true) {
    const expires = userInfo.getIn(["details", "exp"]) * 1000
    const expiresAt = new Date(expires)
    return expiresAt > new Date()
  }
  return false
})

export const getAuthToken = createSelector(userInfo, userInfo =>
  userInfo.get("token")
)

export const getUserDetails = createSelector(userInfo, userInfo =>
  userInfo.get("details").toJS()
)

export const getUserId = createSelector(
  getUserDetails,
  details => details["id"]
)
