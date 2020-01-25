import React from 'react'
import { formatDate } from '../utils/helpers'
import MetaInfo from './MetaInfo'

export function Comment({ comment }) {
  const { by, time, text } = comment
  return (
    <div class="comment">
      <MetaInfo>
        <span>
          by <a href={`/user?id=${by}`}>{by}</a>
        </span>
        <span>on {formatDate(time)}</span>
      </MetaInfo>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}
