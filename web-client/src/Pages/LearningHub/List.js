import React, { Component } from "react"
import { connect } from "react-redux"
import Core from "core"
import UIComponents from "ui-components"

const LearningHubPage = UIComponents.posts.list
const LearningHubHeader = UIComponents.posts.listHeader

class ActionHub extends Component {
  componentWillMount() {
    this.props.onLoad()
  }
  render() {
    const {
      posts,
      generatePostLink,
      generateResonateLink,
      availableCategories,
      availableMediaTypes,
      categorySelection,
      keywordSelection,
      mediaTypeSelection,
      onCategorySelectionChange,
      onKeywordSelectionChange,
      onMediaTypeSelectionChange
    } = this.props
    return (
      <React.Fragment>
        <LearningHubHeader
          availableCategories={availableCategories}
          availableMediaTypes={availableMediaTypes}
          categorySelection={categorySelection}
          keywordSelection={keywordSelection}
          mediaTypeSelection={mediaTypeSelection}
          onCategorySelectionChange={onCategorySelectionChange}
          onKeywordSelectionChange={onKeywordSelectionChange}
          onMediaTypeSelectionChange={onMediaTypeSelectionChange}
          generateResonateLink={generateResonateLink}
        />
        <LearningHubPage posts={posts} generatePostLink={generatePostLink} />
      </React.Fragment>
    )
  }
}

const mapState = (state, props) => {
  return {
    posts: Core.posts.selectors.getPosts(state, props),
    availableCategories: Core.posts.selectors.getTags(state, props),
    availableMediaTypes: ["Blog", "Photo", "Video", "Link", "Audio"],
    categorySelection: Core.posts.selectors.getCategorySelection(state, props),
    keywordSelection: Core.posts.selectors.getKeywordSelection(state, props),
    mediaTypeSelection: Core.posts.selectors.getMediaTypeSelection(state, props)
  }
}

const mapDispatch = dispatch => {
  return {
    generatePostLink: idea => `/post/${idea.id}`,
    generateResonateLink: () => `/post/new`,
    onLoad: () => {
      dispatch({ type: Core.posts.actions.FETCH_POSTS })
      dispatch({ type: Core.posts.actions.FETCH_TAGS })
    },
    onCategorySelectionChange: category => {
      dispatch({
        type: Core.posts.actions.CATEGORY_SELECTION_CHANGED,
        category
      })
      dispatch({ type: Core.posts.actions.FETCH_POSTS })
    },
    onKeywordSelectionChange: keyword => {
      dispatch({
        type: Core.posts.actions.KEYWORD_SELECTION_CHANGED,
        keyword
      })
      dispatch({ type: Core.posts.actions.FETCH_POSTS })
    },
    onMediaTypeSelectionChange: mediaType => {
      dispatch({
        type: Core.posts.actions.MEDIA_TYPE_SELECTION_CHANGED,
        mediaType
      })
      dispatch({ type: Core.posts.actions.FETCH_POSTS })
    }
  }
}

export default connect(mapState, mapDispatch)(ActionHub)
