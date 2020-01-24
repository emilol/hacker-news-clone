import React from 'react'

export default function Nav() {
  return (
    <nav className="row space-between">
      <ul className="row nav">
        <li>Top</li>
        <li>New</li>
      </ul>
      <button style={{ fontSize: 30 }} className="btn-clear">
        🔦
      </button>
    </nav>
  )
}
