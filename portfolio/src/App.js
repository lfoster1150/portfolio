import React from 'react'
import './styles/App.css'
import { Switch, Route } from 'react-router-dom'
import Introduction from './components/Introduction'
import BootNav from './components/BootNav'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <BootNav />
      <Switch>
        <Route exact path="/" component={Introduction} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  )
}

export default App
