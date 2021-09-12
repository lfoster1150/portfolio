import React from 'react'
import './styles/App.css'
import { Switch, Route } from 'react-router-dom'
import Introduction from './components/Introduction'
import BootNav from './components/BootNav'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App(props) {
  return (
    <div className="App">
      <BootNav />
      <Introduction id="home" />
      <Projects id="projects" />
      <About id="about" />
      <Contact id="contact" />
      {/* <Switch>
        <Route exact path="#home" component={Introduction} />
        <Route exact path="#projects" component={Projects} />
        <Route exact path="#about" component={About} />
        <Route exact path="#contact" component={Contact} />
      </Switch> */}
    </div>
  )
}

export default App
