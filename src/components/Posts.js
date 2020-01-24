import React from 'react'
import PropTypes from 'prop-types'
import { fetchMainPosts } from '../utils/api'
import Loading from './Loading'
import { PostsList } from './PostsList'

export default class Posts extends React.Component {
  state = {
    posts: null,
    error: null,
    loading: true,
  }

  componentDidMount() {
    this.updatePosts(this.props.type)
  }

  updatePosts = type => {
    this.setState({
      type: type,
      error: null,
      loading: true,
    })

    fetchMainPosts(type)
      .then(posts =>
        this.setState({
          posts,
          loading: false,
          error: null,
        }),
      )
      .catch(error => {
        console.warn('Error fetching posts:', error)

        this.setState({
          error: `There was an error fetching posts.`,
          loading: false,
        })
      })
  }

  render() {
    const { posts, error, loading } = this.state

    if (loading) return <Loading />

    if (error) return <p className="center-text error">{error}</p>

    return <PostsList posts={posts} />
  }
}

Posts.propTypes = {
  type: PropTypes.oneOf(['top', 'new']),
}
