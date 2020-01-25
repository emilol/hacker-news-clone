import React from 'react'
import PropTypes from 'prop-types'
import UserMetaInfo from './UserMetaInfo'

export function UserSummary({ user }) {
  return (
    <React.Fragment>
      <h1 className="header">{user.id}</h1>
      <UserMetaInfo created={user.created} karma={user.karma} />
      <p>{user.about}</p>
    </React.Fragment>
  )
}

UserSummary.propTypes = {
  user: PropTypes.object.isRequired,
}
