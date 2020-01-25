import React from 'react'
import PropTypes from 'prop-types'
import PostMetaInfo from './PostMetaInfo'

export function PostsList({ posts }) {
  return (
    <ul>
      {posts.map(post => {
        const { title, url, by, time, descendants } = post

        return (
          <li key={post.id} className="post">
            <a className="link" href={url}>
              {title}
            </a>
            <PostMetaInfo by={by} time={time} descendants={descendants} />
          </li>
        )
      })}
    </ul>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
}
