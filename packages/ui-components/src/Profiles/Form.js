import React from "react"
import { withStyles } from "material-ui/styles"
import { Field, reduxForm } from "redux-form"
import FileField from "../redux-form-dropzone"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import Profile from "./Profile"

const RawLabel = props => {
  const { classes, inline } = props
  return (
    <label className={inline ? classes.inlineLabel : ""}>
      <Typography component="span" className={classes.label}>
        {props.children}
      </Typography>
    </label>
  )
}
const Label = withStyles({
  label: {
    fontFamily: "GT-Pressura",
    fontWeight: 800,
    fontSize: "1.6rem"
  }
})(RawLabel)

const renderField = props => {
  const {
    input,
    label,
    type,
    className,
    meta: { touched, error, warning }
  } = props
  return (
    <div className={error ? "field_with_errors" : ""} style={{ width: "100%" }}>
      <Label>{label}</Label>
      <Typography component="div" style={{ width: "100%" }}>
        <input
          {...input}
          placeholder={label}
          type={type}
          className={className}
        />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </Typography>
    </div>
  )
}

const Form = props => {
  const { classes, handleSubmit, initialValues } = props
  return (
    <div className={classes.whole}>
      <div className={classes.column}>
        <form onSubmit={handleSubmit} className={classes.container}>
          <div>
            <Label>Profile Picture</Label>
            <Typography variant="body2">
              <em>Square photos of your face work best</em>
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <Typography variant="body2">
                Current Photo:
                <img
                  src={initialValues.profile_image_url}
                  style={{ width: 200, height: 200, display: "block" }}
                />
              </Typography>

              <Field
                name="profile_image"
                component={FileField}
                {...props.profile_image}
              />
            </div>
          </div>

          <Field
            label="Your Name or Alias"
            name="alias"
            component={renderField}
            type="text"
            className={classes.textField}
          />

          <Field
            label="Your Location"
            name="location"
            component={renderField}
            type="text"
            className={classes.textField}
          />

          <Field
            label="Your Subtitle"
            name="profile"
            component={renderField}
            type="text"
            className={classes.textField}
          />

          <Field
            label="Your Email"
            name="email"
            component={renderField}
            type="email"
            className={classes.textField}
          />

          <Field
            label="Your Password"
            name="password"
            component={renderField}
            type="password"
            className={classes.textField}
          />

          <Field
            label="Your Password Confirmation"
            name="password_confirmation"
            component={renderField}
            type="password"
            className={classes.textField}
          />

          <div className={classes.buttons}>
            <Button className={classes.publish} onClick={handleSubmit}>
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

const formStyles = theme => ({
  whole: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5em"
  },
  column: {
    width: "50%"
  },

  title: {
    fontSize: 26,
    fontFamily: "GT-Pressura-Light"
  },

  whatsYourIdea: {
    fontSize: 36,
    margin: "36px 0"
  },

  publish: {
    fontFamily: "GT-Pressura-Light",
    fontSize: 30,
    background: "#2d3e95",
    width: 206,
    height: 69,
    color: "white",
    textTransform: "uppercase"
  },
  textField: {
    margin: "12px 0",
    height: 42,
    width: "100%",
    padding: 5,
    marginRight: 5
  },
  buttons: {
    textAlign: "center",
    margin: 50
  },
  inlineLabel: {
    display: "flex",
    whiteSpace: "nowrap",
    alignItems: "center",
    "& > label": {
      marginRight: "1rem"
    }
  }
})

export default withStyles(formStyles, { withTheme: true })(Form)
