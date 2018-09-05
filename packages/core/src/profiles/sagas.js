import { put, call, takeLatest, select } from "redux-saga/effects"
import { ApiLocation } from "../api"
import * as userInfoSelectors from "../userInfo/selectors"
import { FETCH_PROFILE, PROFILE_RECEIVED } from "./actions"
import "isomorphic-fetch"
import { toast } from "react-toastify"

const apiFetchProfile = async (authToken, id) => {
  const response = await fetch(`${ApiLocation}/api/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
  if (!response.ok) {
    return { error: await response.json() }
  } else {
    const json = await response.json()
    return { data: json }
  }
}

function* fetchProfile(action) {
  const { id } = action
  const authToken = yield select(userInfoSelectors.getAuthToken)
  if (!id) throw "MISSING ID"

  const { error, data } = yield call(apiFetchProfile, authToken, id)
  if (error) {
    toast.error("ERROR IN FETCHING PROFILE")
  } else {
    yield put({ type: PROFILE_RECEIVED, id, profile: data.user })
  }
}

function* watchFetchIdea() {
  yield takeLatest(FETCH_PROFILE, fetchProfile)
}

export default [watchFetchIdea]
