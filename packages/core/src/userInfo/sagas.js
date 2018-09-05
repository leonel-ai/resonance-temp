import { put, call, takeEvery, select } from "redux-saga/effects"
import { ApiLocation } from "../api"
import * as selectors from "./selectors"
import { SUBMIT_FORM, REFRESH_TOKEN } from "./actions"
import * as profileActions from "../profiles/actions"
import "isomorphic-fetch"
import { toast } from "react-toastify"
import { startSubmit, stopSubmit } from "redux-form"
import { push } from "react-router-redux"

const formId = "userProfile"

const apiUpdateProfile = async (authToken, id, data) => {
  const {
    alias,
    profile,
    location,
    profile_image,
    email,
    password,
    password_confirmation
  } = data
  const { fileName, mimeType, binaryFile } = data.profile_image || {}

  const response = await fetch(`${ApiLocation}/api/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      user: {
        alias,
        profile,
        location,
        email,
        password,
        password_confirmation,
        file_name: fileName,
        file_mime_type: mimeType,
        profile_image_binary_string: binaryFile
      }
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
  if (!response.ok) {
    try {
      return { error: await response.json() }
    } catch (e) {
      toast.error("ERROR IN UPDATING PROFILE")
      return { error: { errors: [] } }
    }
  } else {
    const json = await response.json()
    return { data: json }
  }
}

function* updateProfile(action) {
  const authToken = yield select(selectors.getAuthToken)
  const id = yield select(selectors.getUserId)
  if (!id) throw "MISSING ID"
  yield put(startSubmit(formId))

  const { error, data } = yield call(
    apiUpdateProfile,
    authToken,
    id,
    action.data
  )
  if (error) {
    yield put(stopSubmit(formId, error.errors))
    toast.warn("Some errors in your form")
  } else {
    yield put(stopSubmit(formId))
    // refresh token
    yield put({ type: REFRESH_TOKEN })
    yield put({ type: profileActions.PROFILE_RECEIVED, id, profile: data.user })
    toast.success("Profile Updated!")
    yield put(push(`/profiles/${id}`))
  }
}

function* watchUpdateProfile() {
  yield takeEvery(SUBMIT_FORM, updateProfile)
}

export default [watchUpdateProfile]
