import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../contexts/theme'
import { formatDate } from '../utils/helpers'

export default function UserMetaInfo({ created, karma }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`meta-info-${theme}`}>
          joined <b>{formatDate(created)}</b> has <b>{karma.toLocaleString()}</b> karma
        </div>
      )}
    </ThemeConsumer>
  )
}

UserMetaInfo.propTypes = {
  created: PropTypes.number.isRequired,
  karma: PropTypes.number.isRequired,
}
