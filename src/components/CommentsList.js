import React from 'react'
import PropTypes from 'prop-types'
import { Comment } from './Comment'

export function CommentsList({ comments }) {
  return comments.map(comment => {
    return <Comment key={comment.id} comment={comment} />
  })
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
}
