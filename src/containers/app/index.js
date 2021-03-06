import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/user-info">About</Link>
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/user-info" component={About} />
    </main>
  </div>
)

export default App
