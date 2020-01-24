import React from 'react'
import PropTypes from 'prop-types'

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
            <div className="meta-info-light">
              by {by} on {new Date(time).toLocaleString()} with {descendants} comments
            </div>
          </li>
        )
      })}
    </ul>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
}
