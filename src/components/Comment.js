import React from 'react'
import Byline from './Byline'

export function Comment({ comment }) {
  const { by, time, text } = comment
  return (
    <div class="comment">
      <Byline by={by} time={time} />
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}
