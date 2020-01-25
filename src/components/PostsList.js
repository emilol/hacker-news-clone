import React from 'react'
import PropTypes from 'prop-types'
import Byline from './Byline'

export function PostsList({ posts }) {
  return (
    <ul>
      {posts.map(post => {
        const { id, title, url, by, time, descendants } = post

        return (
          <li key={post.id} className="post">
            <a className="link" href={url}>
              {title}
            </a>
            <Byline by={by} time={time} id={id} comments={descendants} />
          </li>
        )
      })}
    </ul>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
}
