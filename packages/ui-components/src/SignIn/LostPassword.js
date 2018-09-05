import React from "react"
import Button from "material-ui/Button"
import TextField from "material-ui/TextField"
import { withStyles } from "material-ui/styles"
import Typography from "material-ui/Typography"
import { Link } from "react-router-dom"

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  submitButton: {
    marginTop: 2 * theme.spacing.unit
  },
  card: {
    padding: 5 * theme.spacing.unit
  },
  logIn: {
    margin: 2 * theme.spacing.unit,
    textAlign: "right"
  }
})

const LostPassword = props => {
  const { classes, onSubmit, email, onEmailChange, emailSent } = props

  if (emailSent) {
    return (
      <div className={classes.card}>
        <Typography variant="title">Reset Password</Typography>
        <Typography variant="body2">Please check your email</Typography>
      </div>
    )
  }

  return (
    <div className={classes.card}>
      <Typography variant="title">Reset Password</Typography>
      <Typography variant="body2">
        We will email you a link to reset your password.
      </Typography>
      <form className={classes.container} onSubmit={onSubmit}>
        <TextField
          id="email"
          label="Email"
          value={email}
          onChange={e => onEmailChange(e.target.value)}
          margin="normal"
          autoComplete="email"
        />
        <Button
          className={classes.submitButton}
          onClick={onSubmit}
          color="secondary"
          variant="raised"
        >
          Reset Password
        </Button>
      </form>

      <Typography variant="body2" className={classes.logIn}>
        <Link to="/log-in">Or, Log In</Link>
      </Typography>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(LostPassword)
