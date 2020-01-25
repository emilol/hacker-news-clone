import React from 'react'
import PropTypes from 'prop-types'
import Byline from './Byline'

export function PostSummary({ post }) {
  const { url, title, text, id, by, time, descendants } = post
  return (
    <React.Fragment>
      <h1 className="header">
        <a className="link" href={url}>
          {title}
        </a>
      </h1>
      <Byline by={by} time={time} id={id} comments={descendants} />
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </React.Fragment>
  )
}

PostSummary.propTypes = {
  post: PropTypes.object.isRequired,
}
