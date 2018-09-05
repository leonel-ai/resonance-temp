import { put, call, takeLatest, select } from "redux-saga/effects"
import { ApiLocation } from "../../../api"
import * as userInfoSelectors from "../../../userInfo/selectors"
import { FETCH_ACTION_HUB_IDEAS, IDEAS_RECEIVED } from "../actions"
import "isomorphic-fetch"

const apiFetchActionHubIdeas = async authToken => {
  const response = await fetch(`${ApiLocation}/api/ideas/`, {
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

function* fetchActionHubIdeas(action) {
  const { id } = action
  const authToken = yield select(userInfoSelectors.getAuthToken)

  const { error, data } = yield call(apiFetchActionHubIdeas, authToken)
  if (error) {
    alert("ERROR IN FETCHING IDEA")
  } else {
    yield put({ type: IDEAS_RECEIVED, ideas: data.ideas })
  }
}

function* watchActionHubFetch() {
  yield takeLatest(FETCH_ACTION_HUB_IDEAS, fetchActionHubIdeas)
}

export default [watchActionHubFetch]
