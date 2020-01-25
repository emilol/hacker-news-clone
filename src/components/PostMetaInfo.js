import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helpers'
import MetaInfo from './MetaInfo'

export default function PostMetaInfo({ id, by, time, descendants }) {
  return (
    <MetaInfo>
      <span>
        by <Link to={`/user?id=${by}`}>{by}</Link>
      </span>
      <span>on {formatDate(time)}</span>
      <span>
        with <Link to={`/post?id=${id}`}>{descendants.toLocaleString()}</Link> comments
      </span>
    </MetaInfo>
  )
}

PostMetaInfo.propTypes = {
  id: PropTypes.number.isRequired,
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  descendants: PropTypes.number.isRequired,
}
