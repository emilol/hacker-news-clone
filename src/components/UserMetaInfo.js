import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../utils/helpers'
import MetaInfo from './MetaInfo'

export default function UserMetaInfo({ created, karma }) {
  return (
    <MetaInfo>
      <span>
        joined <b>{formatDate(created)}</b>
      </span>
      <span>
        has <b>{karma.toLocaleString()}</b> karma
      </span>
    </MetaInfo>
  )
}

UserMetaInfo.propTypes = {
  created: PropTypes.number.isRequired,
  karma: PropTypes.number.isRequired,
}
