import React from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  render,
  ...others
}) => (
  <Route
    {...others}
    render={props => {
      if (!isAuthenticated) {
        return (
          <Redirect
            to={{
              pathname: "/log-in"
            }}
          />
        )
      }

      if (!!render) {
        return render(props)
      } else {
        return <Component {...props} />
      }
    }}
  />
)

export default PrivateRoute
