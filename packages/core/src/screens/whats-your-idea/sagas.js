import { put, call, takeEvery, select, takeLatest } from "redux-saga/effects"
import { startSubmit, stopSubmit, reset, SubmissionError } from "redux-form"
import { SUBMIT_IDEA_FORM, REGISTRATION_OPEN, DESTROY_IDEA } from "./actions"
import * as registrationActions from "../registration/actions"
import * as userInfoSelectors from "../../userInfo/selectors"
import "isomorphic-fetch"
import { ApiLocation } from "../../api"
import { push } from "react-router-redux"
const formId = "whatsYourIdea"
const SIGN_IN_REQUIRED = "SIGN_IN_REQUIRED"

const now = () => {
  return new Date().getTime()
}

const apiDeleteIdea = async (authToken, id) => {
  const response = await fetch(`${ApiLocation}/api/ideas/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
  if (!response.ok) {
    const contentType = response.headers.get("content-type")
    return { error: await response.text() }
  } else {
    return { data: response }
  }
}

function* submitDeleteIdea(action) {
  const { id } = action
  yield put(startSubmit(formId))
  const authToken = yield select(userInfoSelectors.getAuthToken)
  const { data, error } = yield call(apiDeleteIdea, authToken, id)

  if (error) {
    yield put(stopSubmit(formId, error.errors))
  } else {
    yield put(reset(formId))
    yield put(stopSubmit(formId))
    yield put(push(`/act/`))
  }
}

function* watchIdeaDeletion() {
  yield takeLatest(DESTROY_IDEA, submitDeleteIdea)
}

/* --------------- */

const apiSubmitIdea = async (authToken, data, id) => {
  const idAsPath = id ? id : ""
  const response = await fetch(`${ApiLocation}/api/ideas/${idAsPath}`, {
    method: id ? "PATCH" : "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      idea: { ...data, submittedAt: now() }
    })
  })
  if (!response.ok) {
    const contentType = response.headers.get("content-type")
    if (response.status === 401) {
      return { error: SIGN_IN_REQUIRED, errors: { user: "required" } }
    } else if (contentType && contentType.indexOf("application/json") !== -1) {
      return { error: await response.json() }
    } else {
      return { error: await response.text() }
    }
  } else {
    const json = await response.json()
    return { data: json }
  }
}

function* submitIdeaSaga(action) {
  yield put(startSubmit(formId))
  const { id } = action
  const authToken = yield select(userInfoSelectors.getAuthToken)
  const { data, error } = yield call(apiSubmitIdea, authToken, action.data, id)

  if (error && error === SIGN_IN_REQUIRED) {
    yield put({ type: registrationActions.REGISTRATION_OPEN })
  }

  if (error) {
    yield put(stopSubmit(formId, error.errors))
  } else {
    yield put(reset(formId))
    yield put(stopSubmit(formId))
    yield put(push(`/act/${data.idea.id}`))
  }
}

function* watchIdeaFormSubmission() {
  yield takeEvery(SUBMIT_IDEA_FORM, submitIdeaSaga)
}

export default [watchIdeaFormSubmission, watchIdeaDeletion]
