import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function PostMetaInfo({ by, time, descendants }) {
  return (
    <div className={`meta-info-light`}>
      by <Link to={`/user/${by}`}>{by}</Link> on {new Date(time).toLocaleString()} with{' '}
      {descendants} comments
    </div>
  )
}

PostMetaInfo.propTypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  descendants: PropTypes.number.isRequired,
}
