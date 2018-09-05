import { call, put, takeEvery, select } from "redux-saga/effects"
import "isomorphic-fetch"
import {
  AUTHENTICATE_USER,
  TOKEN_RECEIVED,
  AUTHENTICATION_FAILED,
  REFRESH_TOKEN
} from "../../userInfo/actions"
import {
  RESET_PASSWORD,
  PASSWORD_RESET_EMAIL_SENT,
  VERIFY_RESET_TOKEN
} from "./actions"
import * as userInfoSelectors from "../../userInfo/selectors"
import { getEmail, getPassword } from "./selectors"
import { toast } from "react-toastify"
import * as profileActions from "../../profiles/actions"
import { ApiLocation } from "../../api"
import jwtDecode from "jwt-decode"
import { push } from "react-router-redux"

const apiVerifyToken = async token => {
  const response = await fetch(`${ApiLocation}/api/password/verify`, {
    method: "POST",
    body: JSON.stringify({
      token
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (response.ok) {
    const json = await response.json()
    return { data: json }
  } else {
    return { error: true }
  }
}

export function* verifyToken(action) {
  const resetPasswordToken = action.token
  const { error, data } = yield call(apiVerifyToken, resetPasswordToken)

  if (error) {
    toast.error("Could not reset password")
  } else {
    // Let's sign in!
    const details = jwtDecode(data.jwt)
    yield put({ type: TOKEN_RECEIVED, user: data })
    yield put({ type: profileActions.FETCH_PROFILE, id: details.id })
    yield put(push(`/me`))
  }
}

function* watchVerifyToken() {
  yield takeEvery(VERIFY_RESET_TOKEN, verifyToken)
}

/* ------------------ */

const apiResetPassword = async email => {
  const response = await fetch(`${ApiLocation}/api/password/reset`, {
    method: "POST",
    body: JSON.stringify({
      email
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (response.ok) {
    return { data: true }
  } else {
    return { error: true }
  }
}

export function* resetPassword() {
  const email = yield select(getEmail)
  const { error, data } = yield call(apiResetPassword, email)

  if (error) {
    toast.error("Could not reset password")
  } else {
    yield put({ type: PASSWORD_RESET_EMAIL_SENT })
  }
}

function* watchResetPassword() {
  yield takeEvery(RESET_PASSWORD, resetPassword)
}

/* ------- */

const apiRefreshToken = async token => {
  const response = await fetch(`${ApiLocation}/api/user_token/token`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    throw new Error("There was a problem with the email and/or password")
  }
}

export function* refreshToken() {
  const authToken = yield select(userInfoSelectors.getAuthToken)

  const { error, data } = yield call(apiRefreshToken, authToken)
  if (error) {
    toast.error("Error, please refresh")
  } else {
    yield put({ type: TOKEN_RECEIVED, user: data.jwt })
  }
}

function* watchRefreshUserToken() {
  yield takeEvery(REFRESH_TOKEN, refreshToken)
}

/*--------------------*/

const authenticate = async (email, password) => {
  const response = await fetch(`${ApiLocation}/api/user_token`, {
    method: "POST",
    body: JSON.stringify({
      auth: {
        email,
        password
      }
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    throw new Error("There was a problem with the email and/or password")
  }
}

export function* fetchToken() {
  try {
    const email = yield select(getEmail)
    const password = yield select(getPassword)
    const user = yield call(authenticate, email, password)
    const details = jwtDecode(user.jwt)
    yield put({ type: TOKEN_RECEIVED, user: user })
    yield put({ type: profileActions.FETCH_PROFILE, id: details.id })
  } catch (e) {
    toast.error(e.message)
  }
}

function* authenticateUserSaga() {
  yield takeEvery(AUTHENTICATE_USER, fetchToken)
}

export default [
  authenticateUserSaga,
  watchRefreshUserToken,
  watchResetPassword,
  watchVerifyToken
]
