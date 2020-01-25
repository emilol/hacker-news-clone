import React from 'react'
import PropTypes from 'prop-types'
import MetaInfo from './MetaInfo'
import { formatDate } from '../utils/helpers'

export function UserSummary({ user }) {
  const { id, created, karma, about } = user

  return (
    <React.Fragment>
      <h1 className="header">{id}</h1>
      <MetaInfo>
        <span>
          joined <b>{formatDate(created)}</b>
        </span>
        <span>
          has <b>{karma.toLocaleString()}</b> karma
        </span>
      </MetaInfo>
      <p dangerouslySetInnerHTML={{ __html: about }} />
    </React.Fragment>
  )
}

UserSummary.propTypes = {
  user: PropTypes.object.isRequired,
}
