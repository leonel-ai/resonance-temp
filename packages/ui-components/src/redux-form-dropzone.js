import React from "react"
import Dropzone from "react-dropzone"
import base64 from "base-64"
import Typography from "material-ui/Typography"

class FileInput extends React.Component {
  onChange = files => {
    const file = files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const fileAsBinaryString = reader.result
        const binaryFile = base64.encode(fileAsBinaryString)

        const fileObject = {
          fileName: file.name,
          mimeType: file.type,
          previewUrl: file.preview,
          binaryFile
        }

        // For Redux form
        if (this.props.input) {
          const { input: { onChange } } = this.props
          onChange(fileObject)
        } else if (this.props.onChange) {
          this.props.onChange(fileObject)
        } else {
          console.warn("redux-form-dropzone => Forgot to pass onChange props ?")
        }
      }
      reader.onabort = () => console.log("file reading was aborted")
      reader.onerror = () => console.log("file reading has failed")

      reader.readAsBinaryString(file)
    }
  }

  render() {
    return (
      <Dropzone
        onDrop={this.onChange}
        {...this.props}
        accept={["image/png", "image/jpg", "image/jpeg"]}
        style={{ width: "inherit", height: "inherit", border: 0 }}
      >
        <Typography
          style={{
            background: "#FADE4B",
            color: "#ffffff",
            padding: "10px 5px",
            textDecoration: "uppercase",
            fontSize: 24
          }}
        >
          Select File
        </Typography>
      </Dropzone>
    )
  }
}
export default FileInput
