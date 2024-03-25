import React from 'react'
import './styles/App.css'
import Introduction from './components/Introduction'
import BootNav from './components/BootNav'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App(props) {
  return (
    <div className="App">
      <BootNav />
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
