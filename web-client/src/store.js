import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createHistory from "history/createBrowserHistory"
import Core from "core"
import createSagaMiddleware from "redux-saga"
import { routerReducer, routerMiddleware } from "react-router-redux"
import { reducer as formReducer } from "redux-form"

const sagaMiddleware = createSagaMiddleware()

const {
  connectMenu,
  editor,
  mainMenu,
  posts,
  registration,
  screenSignIn,
  screenIdea,
  screenSearch,
  userInfo,
  whatsYourIdea,
  profiles
} = Core

const reducer = combineReducers({
  connectMenu: connectMenu.reducer,
  editor: editor.reducer,
  mainMenu: mainMenu.reducer,
  posts: posts.reducer,
  registration: registration.reducer,
  router: routerReducer,
  screenSignIn: screenSignIn.reducer,
  screenIdea: screenIdea.reducer,
  screenSearch: screenSearch.reducer,
  userInfo: userInfo.reducer,
  whatsYourIdea: whatsYourIdea.reducer,
  form: formReducer,
  profiles: profiles.reducer
})

const composeEnhancers = composeWithDevTools({})
const history = createHistory()
const routerMiddlewareWithHistory = routerMiddleware(history)

export default () => {
  const inProduction = process.env["REACT_APP_DATA_ENV"] === "production"

  const middlewares = applyMiddleware(
    sagaMiddleware,
    routerMiddlewareWithHistory
  )

  const enhancers = inProduction ? middlewares : composeEnhancers(middlewares)

  const store = createStore(reducer, enhancers)
  ;[
    connectMenu,
    editor,
    mainMenu,
    posts,
    registration,
    screenSignIn,
    screenIdea,
    screenSearch,
    userInfo,
    whatsYourIdea,
    profiles
  ].forEach(mod => mod.sagas.map(sagaMiddleware.run))

  return { store, history }
}
