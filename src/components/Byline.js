import React from 'react'
import PropTypes from 'prop-types'
import MetaInfo from './MetaInfo'
import { formatDate } from '../utils/helpers'
import { Link } from 'react-router-dom'

export default function Byline({ by, time, id = null, comments = null }) {
  return (
    <MetaInfo>
      <span>
        by <a href={`/user?id=${by}`}>{by}</a>
      </span>
      <span>on {formatDate(time)}</span>
      {comments !== null && (
        <span>
          with <Link to={`/post?id=${id}`}>{comments.toLocaleString()}</Link> comments
        </span>
      )}
    </MetaInfo>
  )
}

Byline.propTypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  id: PropTypes.number,
  comments: PropTypes.number,
}
