import { createSelector } from "reselect"
import Immutable from "immutable"
import { convertToRaw, convertFromRaw, EditorState } from "draft-js"
import draftToHtml from "draftjs-to-html"
import * as postSelectors from "../posts/selectors"
import * as userInfoSelectors from "../../userInfo/selectors"
const screenSelector = state => state.editor

export const getEditorType = createSelector(screenSelector, state =>
  state.get("editorType")
)

export const getEditorState = createSelector(screenSelector, state => {
  return state.get("editorState") || EditorState.createEmpty()
})

export const getEditorTitle = createSelector(screenSelector, state =>
  state.get("editorTitle")
)

export const getEditorUrl = createSelector(screenSelector, state =>
  state.get("editorUrl")
)

export const getEditorFile = createSelector(screenSelector, state =>
  state.get("editorFile")
)

export const getEditorTags = createSelector(screenSelector, state =>
  state.get("editorTags").toJS()
)
export const getTagSuggestions = createSelector(
  postSelectors.getTags,
  tags => tags
)

export const getEditorDescription = createSelector(screenSelector, state =>
  state.get("editorDescription")
)

export const hasErrors = createSelector(screenSelector, state => {
  return state.get("errors").size > 0
})
export const errors = createSelector(screenSelector, state =>
  state.get("errors").toJS()
)

export const canEditPost = createSelector(
  postSelectors.getPost,
  userInfoSelectors.getUserDetails,
  (post, user) => {
    if (!user.id) return false
    if (user.admin === true) return true
    if (user.id === post.user.id) return true
    return false
  }
)

export const getPostForPersist = createSelector(
  screenSelector,
  getEditorType,
  getEditorState,
  (state, editorType, editorState) => {
    const url = state.get("editorUrl")
    const id = state.get("postId")
    const tag_names = state
      .get("editorTags")
      .toJS()
      .map(t => t.text)

    const params = {
      title: state.get("editorTitle"),
      description: state.get("editorDescription")
    }
    if (editorType === "Blog") {
      const contentState = editorState.getCurrentContent()
      const rawContentState = convertToRaw(editorState.getCurrentContent())
      const hashConfig = {
        trigger: "#",
        separator: " "
      }
      params.content = draftToHtml(rawContentState, hashConfig)
      params.tag_names = tag_names
      params.content_plain_text = contentState.getPlainText()
    }

    if (editorType === "Link" || editorType === "Video") {
      params.url = url
      params.content_plain_text = url
    }
    if (state.get("editorFile")) {
      const fileBinary = state.get("editorFile").binaryFile
      const fileName = state.get("editorFile").fileName
      const mimeType = state.get("editorFile").mimeType

      params.file_binary_string = fileBinary
      params.file_name = fileName
      params.file_mime_type = mimeType
    }

    return {
      type: editorType,
      id,
      [editorType]: params
    }
  }
)
