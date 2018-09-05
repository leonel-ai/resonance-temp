import { put, call, takeLatest, select } from "redux-saga/effects"
import { ApiLocation } from "../../api"
import * as actions from "./actions"
import { getSearchText } from "./selectors"
import "isomorphic-fetch"
import { toast } from "react-toastify"

const apiSubmitSearch = async text => {
  const response = await fetch(`${ApiLocation}/api/search?text=${text}`, {
    method: "GET"
  })
  if (!response.ok) {
    return { error: `There was a problem. Error code: ${response.status}` }
  } else {
    const json = await response.json()
    return { data: json }
  }
}

function* submitSearch(action) {
  const text = yield select(getSearchText)
  const { data, error } = yield call(apiSubmitSearch, text)

  if (error) {
    toast.error(error)
  } else {
    const results = data.results
      .map(result => {
        if (result.type === "Idea") {
          result.url = `/act/${result.id}`
        } else if (result.type === "User") {
          result.url = `/profile/${result.id}`
        } else if (result.type === "Post") {
          result.url = `/post/${result.id}`
        } else {
          return null
        }
        return result
      })
      .filter(r => r)
    yield put({ type: actions.SEARCH_RESULTS_RECEIVED, results })
  }
}

function* watchSearch() {
  yield takeLatest(actions.SEARCH, submitSearch)
}

export default [watchSearch]
