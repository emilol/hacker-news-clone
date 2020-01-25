import React from 'react'
import PropTypes from 'prop-types'
import PostMetaInfo from './PostMetaInfo'

export function PostSummary({ post }) {
  const { url, title, text, id, by, time, descendants } = post
  return (
    <React.Fragment>
      <h1 className="header">
        <a className="link" href={url}>
          {title}
        </a>
      </h1>
      <PostMetaInfo id={id} by={by} time={time} descendants={descendants} />
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </React.Fragment>
  )
}

PostSummary.propTypes = {
  post: PropTypes.object.isRequired,
}
