import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects"
import {
  POSTS_RECEIVED,
  FETCH_POSTS,
  PERSIST_POST,
  POST_PERSISTED,
  FETCH_POST,
  POST_RECEIVED,
  TAGS_RECEIVED,
  FETCH_TAGS
} from "./actions"
import { API_ERROR } from "../../apiErrors/actions"
import * as userInfoSelectors from "../../userInfo/selectors"
import {
  getPostForPersist,
  getCategorySelection,
  getKeywordSelection,
  getMediaTypeSelection
} from "./selectors"
import { push } from "react-router-redux"
import { ApiLocation } from "../../api"
import "isomorphic-fetch"
import "url-search-params-polyfill"

const apiFetchTags = async () => {
  const response = await fetch(`${ApiLocation}/api/tags`)
  if (!response.ok) {
    return { error: response }
  } else {
    const json = await response.json()
    return { response: json }
  }
}

function* fetchTags() {
  const { response, error } = yield call(apiFetchTags)
  if (error) {
    yield put({ type: API_ERROR, error })
  } else {
    yield put({ type: TAGS_RECEIVED, tags: response.tags })
  }
}

function* watchFetchTags() {
  yield takeLatest(FETCH_TAGS, fetchTags)
}

/* ------- */

const apiFetchPosts = async ({
  tagSelection,
  keywordSelection,
  mediaTypeSelection,
  authToken
}) => {
  var searchParams = new URLSearchParams()
  if (tagSelection) {
    searchParams.set("tag", tagSelection)
  }
  if (keywordSelection) {
    searchParams.set("q", keywordSelection)
  }
  if (mediaTypeSelection) {
    searchParams.set("type", mediaTypeSelection)
  }
  const response = await fetch(`${ApiLocation}/api/posts?${searchParams}`, {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  if (!response.ok) {
    return { error: response }
  } else {
    const json = await response.json()
    return { response: json }
  }
}

function* fetchPosts() {
  const tagSelection = yield select(getCategorySelection)
  const keywordSelection = yield select(getKeywordSelection)
  const mediaTypeSelection = yield select(getMediaTypeSelection)
  const authToken = yield select(userInfoSelectors.getAuthToken)
  const { response, error } = yield call(apiFetchPosts, {
    tagSelection,
    keywordSelection,
    mediaTypeSelection,
    authToken
  })
  if (error) {
    yield put({ type: API_ERROR, error })
  } else {
    yield put({ type: POSTS_RECEIVED, posts: response.posts })
  }
}

function* watchPosts() {
  yield takeEvery(FETCH_POSTS, fetchPosts)
}

/* ------- */

const apiFetchPost = async (token, id) => {
  const response = await fetch(`${ApiLocation}/api/posts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  if (!response.ok) {
    return { error: response }
  } else {
    const json = await response.json()
    return { response: json }
  }
}

function* fetchPost(action) {
  const { id } = action
  const authToken = yield select(userInfoSelectors.getAuthToken)
  const { response, error } = yield call(apiFetchPost, authToken, id)
  if (error) {
    yield put({ type: API_ERROR, error })
  } else {
    yield put({ type: POST_RECEIVED, id, post: response.post })
  }
}

function* watchPost() {
  yield takeEvery(FETCH_POST, fetchPost)
}

export default [watchPosts, watchPost, watchFetchTags]
