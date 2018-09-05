import { put, call, takeLatest, select } from "redux-saga/effects"
import { ApiLocation } from "../../api"
import { getEmail } from "./selectors"
import * as userActions from "../../userInfo/actions"
import { REGISTER_USER, SUBMISSION_STARTED } from "./actions"
import { toast } from "react-toastify"
import "isomorphic-fetch"

const apiSubmitRegistration = async email => {
  const response = await fetch(`${ApiLocation}/api/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: { email } })
  })
  if (!response.ok) {
    return { error: await response.json() }
  } else {
    const json = await response.json()
    return { data: json }
  }
}

function* submitRegistration(action) {
  const email = yield select(getEmail)

  const { data, error } = yield call(apiSubmitRegistration, email)

  if (error) {
    toast.warn(
      Object.keys(error.errors)
        .map(k => `${k}: ${error.errors[k].join(", ")}`)
        .join("\n")
    )
  } else {
    const { jwt } = data
    if (jwt) {
      yield put({ type: userActions.TOKEN_RECEIVED, user: { jwt } })
    }
  }
}

function* watchSubmitRegistration() {
  yield takeLatest(REGISTER_USER, submitRegistration)
}

export default [watchSubmitRegistration]
