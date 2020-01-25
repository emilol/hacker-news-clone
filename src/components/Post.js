import React from 'react'
import queryString from 'query-string'
import Loading from './Loading'
import { fetchItem, fetchComments } from '../utils/api'
import { PostSummary } from './PostSummary'
import { CommentsList } from './CommentsList'

export default class Post extends React.Component {
  state = {
    post: null,
    comments: null,
    error: null,
    loadingPost: true,
    loadingComments: false,
  }

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search)

    fetchItem(id)
      .then(post => {
        this.setState({
          post,
          error: null,
          loadingPost: false,
          loadingComments: true,
        })

        return fetchComments(post.kids || [])
      })
      .then(comments =>
        this.setState({
          comments,
          error: null,
          loadingPost: false,
          loadingComments: false,
        }),
      )
      .catch(error => {
        console.warn('Error fetching post details:', error)

        this.setState({
          error: `There was an error fetching post details`,
          loadingPost: false,
          loadingComments: false,
        })
      })
  }

  render() {
    const { post, comments, error, loadingPost, loadingComments } = this.state

    return (
      <React.Fragment>
        {error && <p className="center-text error">{error}</p>}

        {loadingPost && <Loading text="Fetching Post" />}
        {post && <PostSummary post={post} />}

        {loadingComments && <Loading text="Fetching Comments" />}
        {comments && comments.length && <CommentsList comments={comments} />}
      </React.Fragment>
    )
  }
}
