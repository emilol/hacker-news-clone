import React from 'react'
import PropTypes from 'prop-types'
import UserMetaInfo from './UserMetaInfo'

export function UserSummary({ user }) {
  const { id, created, karma, about } = user

  return (
    <React.Fragment>
      <h1 className="header">{id}</h1>
      <UserMetaInfo created={created} karma={karma} />
      <p dangerouslySetInnerHTML={{ __html: about }} />
    </React.Fragment>
  )
}

UserSummary.propTypes = {
  user: PropTypes.object.isRequired,
}
