import React from 'react'
import './App.css'
import Posts from './components/Posts'
import Nav from './components/Nav'

function App() {
  return (
    <div className="container">
      <Nav />

      <Posts />
    </div>
  )
}

export default App
