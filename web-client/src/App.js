import React from "react"
import createStore from "./store"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import Pages from "./Pages"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const { store, history } = createStore()

const App = props => (
  <Provider store={store}>
    <React.Fragment>
      <ToastContainer />
      <ConnectedRouter history={history}>
        <Pages />
      </ConnectedRouter>
    </React.Fragment>
  </Provider>
)

export default App
