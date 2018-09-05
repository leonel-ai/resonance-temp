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
  forgotPassword: {
    margin: 2 * theme.spacing.unit,
    textAlign: "right"
  }
})

const SignIn = props => {
  const {
    classes,
    onSubmit,
    email,
    password,
    onEmailChange,
    onPasswordChange
  } = props

  return (
    <div className={classes.card}>
      <Typography variant="title">Log In</Typography>
      <form
        className={classes.container}
        onSubmit={e => {
          e.preventDefault()
          onSubmit()
        }}
      >
        <TextField
          id="email"
          label="Email"
          value={email}
          onChange={e => onEmailChange(e.target.value)}
          margin="normal"
          autoComplete="email"
        />

        <TextField
          id="password"
          type="password"
          label="Password"
          value={password}
          onChange={e => onPasswordChange(e.target.value)}
          autoComplete="current-password"
          margin="normal"
        />
        <Button
          className={classes.submitButton}
          onClick={onSubmit}
          color="secondary"
          variant="raised"
        >
          Sign In
        </Button>
      </form>

      <Typography variant="body2" className={classes.forgotPassword}>
        <Link to="/password/new">Forgot Password?</Link>
      </Typography>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(SignIn)
