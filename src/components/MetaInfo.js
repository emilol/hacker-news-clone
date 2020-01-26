import React from 'react'
import { ThemeConsumer } from '../contexts/theme'

export default function MetaInfo({ children }) {
  return (
    <ThemeConsumer>
      {({ theme }) => <div className={`meta-info-${theme}`}>{children}</div>}
    </ThemeConsumer>
  )
}
