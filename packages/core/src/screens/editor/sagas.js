import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects"
import {
  PERSIST_POST,
  POST_PERSISTED,
  EDITOR_ERROR_RECEIVED,
  DELETE_POST,
  POST_DELETED
} from "./actions"
import { API_ERROR } from "../../apiErrors/actions"
import * as userInfoSelectors from "../../userInfo/selectors"
import { getPostForPersist } from "./selectors"
import "isomorphic-fetch"
import { push } from "react-router-redux"
import { ApiLocation } from "../../api"

const apiDeletePost = async (token, id) => {
  const response = await fetch(`${ApiLocation}/api/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  if (!response.ok) {
    return { error: response }
  } else {
    return { data: response }
  }
}

function* deletePost(action) {
  const { id } = action
  const authToken = yield select(userInfoSelectors.getAuthToken)
  const { data, error } = yield call(apiDeletePost, authToken, id)
  if (error) {
    yield put({ type: API_ERROR, error })
  } else {
    yield put({ type: POST_DELETED, id })
    yield put(push(`/learn/`))
  }
}

/* ------------ */

const apiPersistPost = async (token, post) => {
  const id = post.id || ""
  const response = await fetch(`${ApiLocation}/api/posts/${id}`, {
    method: id ? "PATCH" : "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  if (response.status === 422) {
    const json = await response.json()
    return { error: json }
  } else if (!response.ok) {
    return { error: response }
  } else {
    const json = await response.json()
    return { data: json }
  }
}

function* persistPost() {
  const post = yield select(getPostForPersist)
  const authToken = yield select(userInfoSelectors.getAuthToken)
  const { data, error } = yield call(apiPersistPost, authToken, post)
  if (error) {
    yield put({ type: API_ERROR, error })
    yield put({ type: EDITOR_ERROR_RECEIVED, errors: error.errors || [] })
  } else {
    yield put({ type: POST_PERSISTED, post: data })
    yield put(push(`/post/${data.post.id}`))
  }
}

function* watchPersistPost() {
  yield takeLatest(PERSIST_POST, persistPost)
}

function* watchDeletePost() {
  yield takeLatest(DELETE_POST, deletePost)
}

export default [watchPersistPost, watchDeletePost]
