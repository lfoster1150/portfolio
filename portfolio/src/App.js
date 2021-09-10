import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Introduction from './components/Introduction'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={introduction} />
        <Route exact path="/propjects" component={introduction} />
        <Route exact path="/about" component={introduction} />
        <Route exact path="/contact" component={introduction} />
      </Switch>
      <h1>app</h1>
    </div>
  )
}

export default App
