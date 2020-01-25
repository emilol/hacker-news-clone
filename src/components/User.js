import React from 'react'
import queryString from 'query-string'
import Loading from './Loading'
import { fetchUser, fetchPosts } from '../utils/api'
import { UserSummary } from './UserSummary'
import { PostsList } from './PostsList'

export default class User extends React.Component {
  state = {
    user: null,
    error: null,
    loadingUser: true,
    loadingPosts: false,
  }

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search)

    fetchUser(id)
      .then(user => {
        this.setState({
          user,
          error: null,
          loadingUser: false,
          loadingPosts: true,
        })

        return fetchPosts(user.submitted.slice(0, 30))
      })
      .then(posts =>
        this.setState({
          posts,
          error: null,
          loadingUser: false,
          loadingPosts: false,
        }),
      )
      .catch(error => {
        console.warn('Error fetching posts:', error)

        this.setState({
          error: `There was an error fetching user details`,
          loadingUser: false,
          loadingPosts: false,
        })
      })
  }

  render() {
    const { user, posts, error, loadingUser, loadingPosts } = this.state

    return (
      <React.Fragment>
        {error && <p className="center-text error">{error}</p>}

        {loadingUser && <Loading text="Loading User" />}
        {user && <UserSummary user={user} />}

        {loadingPosts && <Loading text="Loading Posts" />}
        {posts && (
          <React.Fragment>
            <h2>Posts</h2>
            <PostsList posts={posts} />
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}
