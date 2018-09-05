import React, { Component } from "react"
import UIComponents from "ui-components"
import { connect } from "react-redux"
import Core from "core"
import { Link } from "react-router-dom"
import base64 from "base-64"

const Editor = UIComponents.editor

class WrappedEditor extends Component {
  componentWillMount() {
    this.props.onLoad()
  }
  render() {
    const {
      editorType,
      editorState,
      onEditorStateChange,
      persistPost,
      editorTitle,
      onEditorTitleChange,
      onImageUpload,
      errors,
      tagSuggestions,
      editorTags,
      handleTagAddition,
      handleTagDeletion,
      registrationIsOpen,
      logInLink,
      registrationEmail,
      onRegistrationEmailChange,
      onRegistrationSubmit,
      onEditorTypeSelection,
      availableTypes,
      onEditorUrlChange,
      editorUrl,
      onFileDrop,
      editorFile,
      post,
      deletePost,
      editorDescription,
      onEditorDescriptionChange
    } = this.props

    return (
      <Editor
        post={post}
        editorType={editorType}
        editorState={editorState}
        editorTitle={editorTitle}
        onEditorTitleChange={onEditorTitleChange}
        onEditorStateChange={onEditorStateChange}
        persistPost={persistPost}
        onImageUpload={onImageUpload}
        errors={errors}
        tagSuggestions={tagSuggestions}
        editorTags={editorTags}
        handleTagAddition={handleTagAddition}
        handleTagDeletion={handleTagDeletion}
        registrationIsOpen={registrationIsOpen}
        logInLink={logInLink}
        registrationEmail={registrationEmail}
        onRegistrationEmailChange={onRegistrationEmailChange}
        onRegistrationSubmit={onRegistrationSubmit}
        onEditorTypeSelection={onEditorTypeSelection}
        availableTypes={availableTypes}
        onEditorUrlChange={onEditorUrlChange}
        editorUrl={editorUrl}
        onFileDrop={onFileDrop}
        editorFile={editorFile}
        deletePost={deletePost}
        editorDescription={editorDescription}
        onEditorDescriptionChange={onEditorDescriptionChange}
      />
    )
  }
}

const mapState = (state, props) => {
  return {
    id: Core.posts.selectors.getPostId(state, props),
    post: Core.posts.selectors.getPost(state, props),
    authToken: Core.userInfo.selectors.getAuthToken(state, props),
    editorType: Core.editor.selectors.getEditorType(state, props),
    editorState: Core.editor.selectors.getEditorState(state, props),
    editorTitle: Core.editor.selectors.getEditorTitle(state, props),
    tagSuggestions: Core.editor.selectors.getTagSuggestions(state, props),
    editorTags: Core.editor.selectors.getEditorTags(state, props),
    hasErrors: Core.editor.selectors.hasErrors(state, props),
    errors: Core.editor.selectors.errors(state, props),
    logInLink: <Link to="/log-in">Log In</Link>,
    registrationIsOpen: !Core.userInfo.selectors.isUserAuthenticated(
      state,
      props
    ),
    registrationEmail: Core.registration.selectors.getEmail(state, props),
    availableTypes: ["Blog", "Photo", "Video", "Link", "Audio"],
    editorUrl: Core.editor.selectors.getEditorUrl(state, props),
    editorFile: Core.editor.selectors.getEditorFile(state, props),
    editorDescription: Core.editor.selectors.getEditorDescription(state, props)
  }
}

const merge = (stateProps, { dispatch }, ownProps) => {
  const { authToken, id } = stateProps

  const onLoad = () => {
    dispatch({ type: Core.editor.actions.EDITING_POST_STARTED, postId: id })
    dispatch({ type: Core.posts.actions.FETCH_POST, id })
  }

  const onImageUpload = img =>
    Core.fileUpload.uploadImage(img, authToken).then(data => data)

  const onEditorStateChange = editorState =>
    dispatch({ type: Core.editor.actions.EDITOR_STATE_CHANGED, editorState })

  const persistPost = () => dispatch({ type: Core.editor.actions.PERSIST_POST })

  const onEditorTitleChange = title =>
    dispatch({ type: Core.editor.actions.EDITOR_TITLE_CHANGED, title })

  const handleTagAddition = tag =>
    dispatch({ type: Core.editor.actions.EDITOR_TAG_ADDITION, tag })

  const handleTagDeletion = tagIndex =>
    dispatch({ type: Core.editor.actions.EDITOR_TAG_DELETION, tagIndex })

  const onRegistrationEmailChange = email =>
    dispatch({ type: Core.registration.actions.EMAIL_CHANGED, email })

  const onRegistrationSubmit = () =>
    dispatch({ type: Core.registration.actions.REGISTER_USER })

  const onEditorTypeSelection = editorType =>
    dispatch({
      type: Core.editor.actions.EDITOR_TYPE_SELECTED,
      editorType
    })

  const onEditorUrlChange = url =>
    dispatch({
      type: Core.editor.actions.EDITOR_URL_CHANGED,
      url
    })

  const onEditorDescriptionChange = description =>
    dispatch({
      type: Core.editor.actions.EDITOR_DESCRIPTION_CHANGE,
      description
    })

  const onFileDrop = files => {
    const file = files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const fileAsBinaryString = reader.result
        const binaryFile = base64.encode(fileAsBinaryString)
        dispatch({
          type: Core.editor.actions.FILE_UPLOADED,
          file: {
            fileName: file.name,
            mimeType: file.type,
            previewUrl: file.preview,
            binaryFile
          }
        })
      }
      reader.onabort = () => console.log("file reading was aborted")
      reader.onerror = () => console.log("file reading has failed")

      reader.readAsBinaryString(file)
    }
  }

  const deletePost = () => {
    const willDelete = window.confirm(
      "Are you sure you want to delete this post?"
    )
    if (willDelete === true) {
      dispatch({ type: Core.editor.actions.DELETE_POST, id })
    }
  }

  return {
    ...stateProps,
    onLoad,
    onEditorStateChange,
    persistPost,
    onEditorTitleChange,
    onImageUpload,
    handleTagAddition,
    handleTagDeletion,
    onRegistrationEmailChange,
    onRegistrationSubmit,
    onEditorTypeSelection,
    onEditorUrlChange,
    onFileDrop,
    deletePost,
    onEditorDescriptionChange
  }
}

export default connect(mapState, null, merge)(WrappedEditor)
