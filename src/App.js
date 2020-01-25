import React from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import Posts from './components/Posts'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light',
      }))
    },
  }

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />

              <Route exact path="/" render={() => <Posts type="top" />} />
              <Route path="/new" render={() => <Posts type="new" />} />
            </div>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}
