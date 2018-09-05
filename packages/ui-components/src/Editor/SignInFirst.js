import React from "react"
import { withStyles } from "material-ui/styles"
import Button from "material-ui/Button"
import { Field, reduxForm } from "redux-form"
import Typography from "material-ui/Typography"
import RawDialog from "material-ui/Dialog"
import CloseIcon from "material-ui-icons/Close"

const styles = theme => ({
  publish: {
    background: "#2d3e95",
    width: 206,
    height: 69,
    color: "white",
    textTransform: "uppercase"
  },

  titleText: {
    color: "white",
    fontSize: "1.5rem"
  },
  textField: {
    margin: "12px 0",
    height: 42,
    width: "100%",
    padding: 5,
    marginRight: 5,
    "& > a": {
      color: "#ffffff !important"
    }
  },
  closeIcon: {
    float: "right",
    marginTop: -30,
    marginRight: -80,
    fontSize: "3rem",
    cursor: "pointer"
  }
})

const dialogTheme = theme => ({
  paper: {
    maxWidth: 724,
    width: 724,
    padding: "56px 145px 20px 77px",
    background: "#ff5d45"
  }
})

const Dialog = withStyles(dialogTheme, { withTheme: true })(RawDialog)

const SignInFirst = props => {
  const {
    classes,
    open,
    onClose,
    logIn,
    email,
    onEmailChange,
    onSubmit
  } = props
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <div>
        {onClose && (
          <CloseIcon className={classes.closeIcon} onClick={onClose} />
        )}
        <Typography component="div" className={classes.titleText}>
          It looks like this might be your first time to publish an idea. Your
          idea will be posted after a quick review. If you already have a
          profile, please {logIn}. If not, we invite you to enter your email
          address to create a profile and stay engages with your idea, connect
          further, and learn about more parts of the network.
          <input
            type="email"
            className={classes.textField}
            placeholder="Your Email"
            value={email}
            onChange={e => onEmailChange(e.target.value)}
          />
          <Button
            className={classes.publish}
            onClick={() => {
              if (email) onSubmit()
            }}
          >
            SHARE
          </Button>
        </Typography>
      </div>
    </Dialog>
  )
}
export default withStyles(styles, { withTheme: true })(SignInFirst)
