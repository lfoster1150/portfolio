import React from 'react'
import { Container } from 'react-bootstrap'

const TechIcons = (props) => {
  const { icons } = props

  const getIcon = (icon, key) => {
    switch (icon) {
      case 'html':
        return <i className="devicon-html5-plain-wordmark" key={key}></i>
      case 'css':
        return <i className="devicon-css3-plain-wordmark" key={key}></i>
      case 'javascript':
        return <i className="devicon-javascript-plain" key={key}></i>
      case 'mongodb':
        return <i className="devicon-mongodb-plain-wordmark" key={key}></i>
      case 'express':
        return <i className="devicon-express-original-wordmark" key={key}></i>
      case 'node':
        return <i className="devicon-nodejs-plain-wordmark" key={key}></i>
      case 'react':
        return <i className="devicon-react-original-wordmark" key={key}></i>
      case 'postgresql':
        return <i className="devicon-postgresql-plain-wordmark" key={key}></i>
      case 'vue':
        return <i className="devicon-vuejs-plain-wordmark" key={key}></i>
      case 'flask':
        return <i className="devicon-flask-original-wordmark" key={key}></i>
      case 'sqlalchemy':
        return <i className="devicon-sqlalchemy-original-wordmark" key={key}></i>
      default:
        return undefined
    }
  }

  return (
    <Container className="icon-container">
      {icons.map((icon, index) => getIcon(icon, index))}
    </Container>
  )
}

export default TechIcons
