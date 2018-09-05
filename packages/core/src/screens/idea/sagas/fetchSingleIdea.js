import { put, call, takeLatest, select } from "redux-saga/effects"
import { ApiLocation } from "../../../api"
import * as userInfoSelectors from "../../../userInfo/selectors"
import { FETCH_IDEA, IDEA_RECEIVED } from "../actions"
import "isomorphic-fetch"

const apiFetchIdea = async (authToken, id) => {
  const response = await fetch(`${ApiLocation}/api/ideas/${id}`, {
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

function* fetchIdea(action) {
  const { id } = action
  const authToken = yield select(userInfoSelectors.getAuthToken)
  if (!id) throw "MISSING ID"

  const { error, data } = yield call(apiFetchIdea, authToken, id)
  if (error) {
    alert("ERROR IN FETCHING IDEA")
  } else {
    yield put({ type: IDEA_RECEIVED, id, idea: data.idea })
  }
}

function* watchLoadIdea() {
  yield takeLatest(FETCH_IDEA, fetchIdea)
}

export default [watchLoadIdea]
