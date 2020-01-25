import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../contexts/theme'
import { Link } from 'react-router-dom'

export default function PostMetaInfo({ by, time, descendants }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`meta-info-${theme}`}>
          by <Link to={`/user/${by}`}>{by}</Link> on {new Date(time).toLocaleString()} with{' '}
          {descendants} comments
        </div>
      )}
    </ThemeConsumer>
  )
}

PostMetaInfo.propTypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  descendants: PropTypes.number.isRequired,
}
