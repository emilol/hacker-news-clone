import React from 'react'
import './App.css'
import Posts from './components/Posts'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />

        <Route exact path="/" render={() => <Posts type="top" />} />
        <Route path="/new" render={() => <Posts type="new" />} />
      </div>
    </Router>
  )
}

export default App
