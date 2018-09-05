import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { Link, Route, Switch } from "react-router-dom"
import { push } from "react-router-redux"
import SignIn from "./SignIn"
import LostPassword from "./LostPassword"
import LostPasswordApply from "./LostPasswordApply"
import SignOut from "./SignOut"
import Core from "core"
import UIComponents from "ui-components"
import Homepage from "./Homepage"
import LearningHubModule from "./LearningHub"
import Content from "./Content"
import ActionHubModule from "./ActionHub"
import About from "./About"
import NoMatch from "./NoMatch"
import Search from "./Search"
import Profile from "./Profile"
import ProfileEdit from "./Profile/Edit"
import PrivateRoute from "../PrivateRoute"

const { ActionHub, Idea, IdeaEdit } = ActionHubModule
const {
  List: LearningHub,
  Post: LearningHubPost,
  New: LearningHubNew,
  Edit: LearningHubPostEdit
} = LearningHubModule
const Theme = UIComponents.theme
const MenuBar = UIComponents.menuBar
const MainMenu = UIComponents.mainMenu
const ConnectMenu = UIComponents.connectMenu

const Pages = props => {
  const {
    isAuthenticated,
    onMenuClick,
    onConnectClick,
    openMenu,
    closeMenu,
    openConnect,
    closeConnect,
    goHome
  } = props

  const LoginOrOut = isAuthenticated ? (
    <Link to="/log-out" onClick={closeMenu}>
      Log Out
    </Link>
  ) : (
    <Link to="/log-in" onClick={closeMenu}>
      Log In
    </Link>
  )
  return (
    <Theme>
      <MenuBar
        onLogoClick={goHome}
        onMenuClick={onMenuClick}
        onConnectClick={onConnectClick}
      />

      {openMenu && (
        <MainMenu
          handleMenuClose={closeMenu}
          items={[
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>,
            <Link to="/learn" onClick={closeMenu}>
              Learn
            </Link>,
            <Link to="/act" onClick={closeMenu}>
              Act
            </Link>,
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>,
                <Link to="#" onClick={closeMenu}>
              Test
            </Link>,
            <Link to="/search" onClick={closeMenu}>
              Search
            </Link>,
            isAuthenticated && (
              <Link to="/me" onClick={closeMenu}>
                Profile
              </Link>
            ),
            LoginOrOut
          ]}
        />
      )}
      {openConnect && <ConnectMenu handleConnectMenuClose={closeConnect} />}

      <Content>
        <Switch>
          <PrivateRoute
            exact
            path="/me"
            isAuthenticated={isAuthenticated}
            component={ProfileEdit}
          />
          <Route exact path="/profiles/:profileId" component={Profile} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/about" component={About} />
          <Route exact path="/log-in" component={SignIn} />
          <Route exact path="/password/new" component={LostPassword} />
          <Route exact path="/passwords/:token" component={LostPasswordApply} />
          <Route exact path="/log-out" component={SignOut} />
          <Route exact path="/learn" component={LearningHub} />
          <Route exact path="/post/new" component={LearningHubNew} />
          <Route exact path="/post/:postId" component={LearningHubPost} />
          <Route
            exact
            path="/post/:postId/edit"
            component={LearningHubPostEdit}
          />
          <Route exact path="/act/:ideaId/edit" component={IdeaEdit} />
          <Route exact path="/act/:ideaId" component={Idea} />
          <Route exact path="/act" component={ActionHub} />
          <Route exact path="/" component={Homepage} />
          <Route component={NoMatch} />
        </Switch>
      </Content>
    </Theme>
  )
}

const mapDispatch = dispatch => ({
  goHome: () => dispatch(push("/")),
  onMenuClick: () => {
    dispatch({ type: Core.connectMenu.actions.CONNECT_CLOSED })
    dispatch({ type: Core.mainMenu.actions.MENU_OPENED })
  },
  closeMenu: () => dispatch({ type: Core.mainMenu.actions.MENU_CLOSED }),
  onConnectClick: () => {
    dispatch({ type: Core.mainMenu.actions.MENU_CLOSED })
    dispatch({ type: Core.connectMenu.actions.CONNECT_OPENED })
  },
  closeConnect: () =>
    dispatch({ type: Core.connectMenu.actions.CONNECT_CLOSED })
})
const mapState = state => {
  return {
    openMenu: Core.mainMenu.selectors.isOpen(state),
    openConnect: Core.connectMenu.selectors.isOpen(state),
    isAuthenticated: Core.userInfo.selectors.isUserAuthenticated(state)
  }
}

export default withRouter(connect(mapState, mapDispatch)(Pages))
