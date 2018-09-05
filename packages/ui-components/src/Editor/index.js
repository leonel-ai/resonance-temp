import React from "react"
import { withStyles } from "material-ui/styles"
import Typography from "material-ui/Typography"
import { Editor } from "react-draft-wysiwyg"
import PurpleFormBg from "../Assets/purple-bg.svg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import RawInput from "material-ui/Input"
import { InputAdornment } from "material-ui/Input"
import Button from "material-ui/Button"
import { WithContext as ReactTags } from "react-tag-input"
import "./ReactTags.css"
import SigninFirst from "./SignInFirst"
import EditorTypes from "./EditorTypes"
import Dropzone from "react-dropzone"

const Input = withStyles({
  error: {
    border: "5px solid #f44336"
  }
})(RawInput)

const styles = theme => ({
  formContainer: {
    margin: "68px 161px",
    background: `url(${PurpleFormBg})`,
    padding: "61px 60px"
  },
  title: {
    textTransform: "uppercase",
    color: "white"
  },
  titleInput: {
    background: "white",
    padding: 5,
    margin: "5px 0",
    width: "100%"
  },
  mainContentInput: {
    background: "white",
    padding: 20,
    margin: "5px 0"
  },
  action: {
    margin: "15px 0",
    textAlign: "right"
  },
  saveButton: {
    background: "#2d3e95",
    color: "white"
  },
  deleteButton: {
    background: "red",
    color: "white"
  },
  editor: {
    paddingBottom: 150
  },
  labelError: {
    color: "#f44336"
  },
  inputError: {
    border: "5px solid #f44336"
  },
  dropZone: {
    background: "white",
    width: "100%",
    padding: 5
  }
})

const KeyCodes = {
  comma: 188,
  enter: 13
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

const hasErrorFor = (errors, attr) => (errors[attr] || []).length > 0

const OurEditor = props => {
  const {
    editorType,
    editorState,
    onEditorStateChange,
    classes,
    persistPost,
    deletePost,
    editorTitle,
    onEditorTitleChange,
    onImageUpload,
    errors,
    tagSuggestions,
    editorTags,
    handleTagDeletion,
    handleTagAddition,
    registrationIsOpen,
    logInLink,
    registrationEmail,
    onRegistrationEmailChange,
    onRegistrationSubmit,
    availableTypes,
    onEditorTypeSelection,
    editorUrl,
    onEditorUrlChange,
    onFileDrop,
    editorFile,
    post,
    onCancelRegistration,
    editorDescription,
    onEditorDescriptionChange
  } = props

  const tags = tagSuggestions.map(tag => ({ id: tag.name, text: tag.name }))

  return (
    <Typography component="div" className={classes.formContainer}>
      <SigninFirst
        open={registrationIsOpen}
        logIn={logInLink}
        email={registrationEmail}
        onEmailChange={onRegistrationEmailChange}
        onSubmit={onRegistrationSubmit}
        onClose={onCancelRegistration}
      />

      {editorType === "" && (
        <EditorTypes
          availableTypes={availableTypes}
          onEditorTypeSelection={onEditorTypeSelection}
        />
      )}

      {editorType && (
        <React.Fragment>
          <Typography
            variant="title"
            className={[
              classes.title,
              hasErrorFor(errors, "title") ? classes.labelError : ""
            ].join(" ")}
          >
            Section Title
          </Typography>
          <Input
            error={hasErrorFor(errors, "title")}
            className={classes.titleInput}
            value={editorTitle}
            onChange={e => onEditorTitleChange(e.target.value)}
            endAdornment={
              hasErrorFor(errors, "title") && (
                <InputAdornment position="end">
                  {errors.title.join(", ")}
                </InputAdornment>
              )
            }
          />

          <Typography
            variant="title"
            className={[
              classes.title,
              hasErrorFor(errors, "description") ? classes.labelError : ""
            ].join(" ")}
          >
            Description
          </Typography>
          <Input
            error={hasErrorFor(errors, "description")}
            className={classes.titleInput}
            value={editorDescription}
            onChange={e => onEditorDescriptionChange(e.target.value)}
            endAdornment={
              hasErrorFor(errors, "description") && (
                <InputAdornment position="end">
                  {errors.description.join(", ")}
                </InputAdornment>
              )
            }
          />
        </React.Fragment>
      )}

      <React.Fragment>
        <Typography
          variant="title"
          className={[
            classes.title,
            hasErrorFor(errors, "file") ? classes.labelError : ""
          ].join(" ")}
        >
          {editorType !== "Photo" &&
            editorType !== "Audio" && <span>Featured Image (JPEG/PNG)</span>}
          {editorType === "Photo" && <span>Upload Image File (JPEG/PNG)</span>}
          {editorType === "Audio" && <span>Upload Audio File</span>}
        </Typography>
        <div className={classes.dropZone}>
          <Dropzone
            multiple={false}
            accept={
              editorType === "Audio"
                ? "audio/mpeg,audio/mp3,audio/mp4,audio/x-aiff, audio/ogg, audio/vnd.wav"
                : "image/jpeg, image/png"
            }
            onDrop={onFileDrop}
            style={{
              width: "100%",
              height: "20vh",
              border: "2px dashed black",
              content: "Drag File, or press click",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            Click or Drag Files to Upload
            {editorFile &&
              editorType !== "Audio" && (
                <img
                  src={editorFile.previewUrl}
                  style={{
                    width: 100
                  }}
                />
              )}
            {editorFile &&
              editorType === "Audio" && <div>File: {editorFile.fileName}</div>}
          </Dropzone>
        </div>
      </React.Fragment>

      {editorType === "Video" && (
        <React.Fragment>
          <Typography
            variant="title"
            className={[
              classes.title,
              hasErrorFor(errors, "url") ? classes.labelError : ""
            ].join(" ")}
          >
            Video URL Address
          </Typography>
          <Typography variant="body2" className={classes.title}>
            We can accept URLs from YouTube, Facebook, Twitch, SoundCloud,
            Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion
          </Typography>

          <Input
            error={hasErrorFor(errors, "url")}
            className={classes.titleInput}
            value={editorUrl}
            onChange={e => onEditorUrlChange(e.target.value)}
            endAdornment={
              hasErrorFor(errors, "url") && (
                <InputAdornment position="end">
                  {errors.url.join(", ")}
                </InputAdornment>
              )
            }
          />
        </React.Fragment>
      )}

      {editorType === "Link" && (
        <React.Fragment>
          <Typography
            variant="title"
            className={[
              classes.title,
              hasErrorFor(errors, "url") ? classes.labelError : ""
            ].join(" ")}
          >
            Link URL Address
          </Typography>
          <Input
            error={hasErrorFor(errors, "url")}
            className={classes.titleInput}
            value={editorUrl}
            onChange={e => onEditorUrlChange(e.target.value)}
            endAdornment={
              hasErrorFor(errors, "url") && (
                <InputAdornment position="end">
                  {errors.url.join(", ")}
                </InputAdornment>
              )
            }
          />
        </React.Fragment>
      )}

      {editorType === "Blog" && (
        <React.Fragment>
          <Typography
            variant="title"
            className={[
              classes.title,
              hasErrorFor(errors, "content_plain_text")
                ? classes.labelError
                : ""
            ].join(" ")}
          >
            Content
          </Typography>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName={[
              classes.mainContentInput,
              hasErrorFor(errors, "content_plain_text")
                ? classes.inputError
                : ""
            ].join(" ")}
            editorClassName={classes.editor}
            onEditorStateChange={onEditorStateChange}
            hashtag={{
              separator: " ",
              trigger: "#"
            }}
            toolbar={{
              options: [
                "inline",
                "blockType",
                "list",
                "textAlign",
                "colorPicker",
                "link",
                "emoji",
                "image",
                "remove",
                "history"
              ],
              image: {
                urlEnabled: true,
                fontEnabled: false,
                uploadEnabled: true,
                alignmentEnabled: true,
                uploadCallback: onImageUpload,
                previewImage: true,
                inputAccept:
                  "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                alt: { present: false, mandatory: false },
                defaultSize: {
                  height: "auto",
                  width: "auto"
                }
              }
            }}
            mention={{
              separator: " ",
              trigger: "@",
              suggestions: []
            }}
          />
        </React.Fragment>
      )}

      {editorType && (
        <React.Fragment>
          <Typography
            variant="title"
            className={[
              classes.title,
              hasErrorFor(errors, "tags") ? classes.labelError : ""
            ].join(" ")}
          >
            Categories
          </Typography>
          <ReactTags
            tags={editorTags}
            suggestions={tags}
            handleDelete={handleTagDeletion}
            handleAddition={handleTagAddition}
            delimiters={delimiters}
          />
          <div className={classes.action}>
            <Button className={classes.saveButton} onClick={persistPost}>
              RESONATE
            </Button>
          </div>

          {post && (
            <div className={classes.action}>
              <Button className={classes.deleteButton} onClick={deletePost}>
                DELETE POST
              </Button>
            </div>
          )}
        </React.Fragment>
      )}
    </Typography>
  )
}
OurEditor.defaultProps = {
  handleTagDeletion: () => {},
  handleTagAddition: () => {}
}

export default withStyles(styles, { withTheme: true })(OurEditor)
