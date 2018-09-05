import makeReducer from "../../makeReducer"
import Immutable from "immutable"
import * as actions from "./actions"
import { fromJS } from "immutable"
import { convertToRaw, ContentState, EditorState } from "draft-js"
import * as postActions from "../posts/actions"
import htmlToDraft from "html-to-draftjs"

const reducer = {}
const initialState = Immutable.fromJS({
  editorType: "",
  editorState: false,
  editorTitle: "",
  editorUrl: "",
  editorDescription: "",
  errors: {},
  editorTags: [],
  editorFile: false,
  postId: false,
  loading: false
})

reducer[postActions.POST_RECEIVED] = (state, event) => {
  if (event.id === state.get("postId")) {
    const { post } = event

    const { contentBlocks, entityMap } = htmlToDraft(event.post.content)
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    )
    const editorState = EditorState.createWithContent(contentState)

    return state
      .set("editorType", post.type)
      .set("editorState", editorState)
      .set("editorTitle", post.title)
      .set("editorDescription", post.description)
      .set(
        "editorTags",
        Immutable.fromJS(post.tags.map(t => ({ id: t, text: t })))
      )
      .set("editorUrl", post.url)
  }
  return state
}

reducer[actions.EDITOR_TYPE_SELECTED] = (state, event) =>
  state.set("editorType", event.editorType)

reducer[actions.EDITOR_DESCRIPTION_CHANGE] = (state, event) =>
  state.set("editorDescription", event.description)

reducer[actions.EDITOR_STATE_CHANGED] = (state, event) => {
  const { editorState } = event
  return state.set("editorState", editorState)
}

reducer[actions.EDITOR_TITLE_CHANGED] = (state, event) => {
  const { title } = event
  return state.set("editorTitle", title)
}

reducer[actions.FILE_UPLOADED] = (state, event) =>
  state.set("editorFile", event.file)

reducer[actions.EDITOR_TAG_ADDITION] = (state, event) => {
  const { tag } = event
  const editorTags = state.get("editorTags").push(Immutable.fromJS(tag))
  return state.set("editorTags", editorTags)
}
reducer[actions.EDITOR_TAG_DELETION] = (state, event) => {
  const { tagIndex } = event
  const editorTags = state
    .get("editorTags")
    .filter((t, index) => index !== tagIndex)
  return state.set("editorTags", editorTags)
}

reducer[actions.PERSIST_POST] = (state, event) =>
  state.set("errors", Immutable.Map())

reducer[actions.EDITOR_ERROR_RECEIVED] = (state, event) => {
  const { errors } = event
  return state.set("errors", Immutable.fromJS(errors))
}

reducer[actions.EDITOR_URL_CHANGED] = (state, event) =>
  state.set("editorUrl", event.url)

reducer[actions.EDITING_POST_STARTED] = (state, event) => {
  return state
    .set("postId", event.postId)
    .set("loading", true)
    .set("editorType", "")
    .set("editorTitle", "")
    .set("editorState", false)
    .set("editorFile", false)
    .set("errors", Immutable.Map())
    .set("editorTags", Immutable.List())
}

const resetEditor = (state, event) =>
  state
    .set("editorType", "")
    .set("editorTitle", "")
    .set("editorState", false)
    .set("editorFile", false)
    .set("errors", Immutable.Map())
    .set("editorTags", Immutable.List())

reducer[actions.POST_PERSISTED] = resetEditor
reducer[actions.RESET_EDITOR] = resetEditor
reducer[actions.POST_DELETED] = resetEditor

export default makeReducer(reducer, initialState)
