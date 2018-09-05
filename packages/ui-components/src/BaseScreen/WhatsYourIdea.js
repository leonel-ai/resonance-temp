import React from "react"
import { withStyles } from "material-ui/styles"
import Collapse from "material-ui/transitions/Collapse"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import PlusIcon from "material-ui-icons/Add"
import { Field, reduxForm } from "redux-form"
import SignInFirst from "./SignInFirst"

const styles = theme => ({
  container: {
    background: "#ffe84d",
    padding: "4.0625rem 3.125rem"
  },
  column: {
    paddingTop: 87,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "left"
  },

  [theme.breakpoints.up("lg")]: {
    column: {
      width: 700
    }
  },
  title: {
    fontSize: 26,
    fontFamily: "GT-Pressura-Light"
  },
  thisIsAPlace: {
    color: "#ff5d45",
    marginBottom: 60
  },
  whatsYourIdea: {
    fontSize: 36,
    margin: "36px 0"
  },
  textArea: {
    backgroundColor: "#ff5d45",
    padding: "20px 25px",
    border: 0,
    width: "100%"
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
  deleteIdea: {
    background: "red",
    width: 206,
    height: 69,
    color: "white",
    textTransform: "uppercase"
  },
  support: {
    margin: "2rem 0 2rem -2rem",
    cursor: "pointer"
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

const renderField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error, warning }
}) => (
  <div className={error ? "field_with_errors" : ""} style={{ width: "100%" }}>
    <Label>{label}</Label>
    <Typography component="div" style={{ width: "100%" }}>
      <input {...input} placeholder={label} type={type} className={className} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </Typography>
  </div>
)

const renderTextArea = ({
  input,
  className,
  meta: { touched, error, warning }
}) => {
  return (
    <Typography
      component="div"
      className={error ? "field_with_errors" : ""}
      style={{ width: "100%" }}
    >
      <textarea {...input} className={className} />
      <br />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </Typography>
  )
}

const Form = props => {
  const {
    classes,
    isExpanded,
    onExpansionToggle,
    handleSubmit,
    logInLink,
    onRegistrationToggle,
    registrationIsOpen,
    registrationEmail,
    onRegistrationEmailChange,
    onRegistrationSubmit,
    canEdit,
    onDestroy
  } = props
  return (
    <React.Fragment>
      <SignInFirst
        open={registrationIsOpen}
        logIn={logInLink}
        onClose={onRegistrationToggle}
        email={registrationEmail}
        onEmailChange={onRegistrationEmailChange}
        onSubmit={onRegistrationSubmit}
      />
      <form onSubmit={handleSubmit} className={classes.container}>
        <div className={classes.column}>
          <Typography
            className={[classes.thisIsAPlace, classes.title].join(" ")}
          >
            This is a place to connect to experimentation and innovation, to
            connect to others, share what you're trying and see what others are
            trying, and to get support for your ideas.
          </Typography>

          <Typography
            className={[classes.title, classes.whatsYourIdea].join(" ")}
          >
            Have an idea you'd like to share? Tell Resonance Network about it.
          </Typography>
          <Field
            name="description"
            component={renderTextArea}
            className={classes.textArea}
          />

          <Typography
            className={[classes.title, classes.support].join(" ")}
            onClick={onExpansionToggle}
          >
            <PlusIcon className={classes.plusIcon} /> How can the network
            support your idea?
          </Typography>

          <Collapse in={isExpanded}>
            <Field
              label="SPREAD THE WORD LINK"
              name="spread_word_link"
              component={renderField}
              type="url"
              className={classes.textField}
            />

            <Field
              label="FINANCIAL SUPPORT LINK"
              name="financial_support_link"
              component={renderField}
              type="url"
              className={classes.textField}
            />

            <Field
              label="VOLUNTEER LINK"
              name="volunteer_link"
              component={renderField}
              type="url"
              className={classes.textField}
            />

            <Field
              label="FEEDBACK LINK"
              name="feedback_link"
              component={renderField}
              type="url"
              className={classes.textField}
            />
          </Collapse>

          <div className={classes.inlineLabel}>
            <Field
              label="IDEA TITLE"
              name="title"
              component={renderField}
              type="url"
              className={classes.textField}
            />
          </div>
          <div className={classes.buttons}>
            <Button className={classes.publish} onClick={handleSubmit}>
              Share
            </Button>
          </div>

          {canEdit &&
            onDestroy && (
              <div className={classes.buttons}>
                <Button className={classes.deleteIdea} onClick={onDestroy}>
                  Delete Idea
                </Button>
              </div>
            )}
        </div>
      </form>
    </React.Fragment>
  )
}

export default withStyles(styles, { withTheme: true })(Form)
