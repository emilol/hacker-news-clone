import React from 'react'
import { fetchMainPosts } from '../utils/api'
import Loading from './Loading'

export default class Posts extends React.Component {
  state = {
    type: 'top',
    posts: null,
    error: null,
    loading: true,
  }

  componentDidMount() {
    this.updatePosts(this.state.type)
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
    const { posts, loading } = this.state

    if (loading) return <Loading />

    return posts.map(post => <pre>{JSON.stringify(post)}</pre>)
  }
}
