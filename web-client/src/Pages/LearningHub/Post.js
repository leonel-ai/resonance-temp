import React, { Component } from "react"
import UIComponents from "ui-components"
import { connect } from "react-redux"
import Core from "core"
import { push } from "react-router-redux"
import { DiscussionEmbed } from "disqus-react"

const PostPage = UIComponents.posts.page

class WrappedPost extends Component {
  componentDidMount() {
    this.props.onLoad()
  }
  componentDidUpdate(newProps) {
    if (newProps.id !== this.props.id) {
      this.props.onLoad()
    }
  }
  render() {
    const { post, editPost, canEdit } = this.props

    const disqusConfig = {
      url: window.location.href,
      identifier: post.id,
      title: post.title
    }

    return (
      <PostPage {...post} canEdit={canEdit} editPost={editPost}>
        <DiscussionEmbed
          shortname={"resonance-network-org"}
          config={disqusConfig}
        />
      </PostPage>
    )
  }
}

const mapState = (state, props) => {
  return {
    id: Core.posts.selectors.getPostId(state, props),
    post: Core.posts.selectors.getPost(state, props),
    canEdit: Core.editor.selectors.canEditPost(state, props)
  }
}

const merge = (stateProps, { dispatch }, ownProps) => {
  const { id } = stateProps
  const onLoad = () => dispatch({ type: Core.posts.actions.FETCH_POST, id })

  const editPost = () => dispatch(push(`/post/${id}/edit`))

  return {
    ...stateProps,
    onLoad,
    editPost
  }
}

export default connect(mapState, null, merge)(WrappedPost)
