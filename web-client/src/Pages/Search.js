import React, { Component } from "react"
import UIComponents from "ui-components"
import { connect } from "react-redux"
import Core from "core"

class SearchPage extends Component {
  componentDidMount() {
    this.props.onMount()
  }
  render() {
    return <UIComponents.search {...this.props} />
  }
}

const mapState = (state, props) => {
  return {
    hasSearched: Core.screenSearch.selectors.hasSearched(state, props),
    searchText: Core.screenSearch.selectors.getSearchText(state, props),
    results: Core.screenSearch.selectors.getResults(state, props)
  }
}

const mapDispatch = dispatch => {
  return {
    onMount: () =>
      dispatch({
        type: Core.screenSearch.actions.SEARCH_TEXT_CHANGED,
        text: ""
      }),
    onSearchTextChange: text =>
      dispatch({ type: Core.screenSearch.actions.SEARCH_TEXT_CHANGED, text }),
    onSearch: () =>
      dispatch({
        type: Core.screenSearch.actions.SEARCH
      })
  }
}

export default connect(mapState, mapDispatch)(SearchPage)
