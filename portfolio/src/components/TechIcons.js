import React from 'react'
import { Container } from 'react-bootstrap'

const TechIcons = (props) => {
  const { icons } = props

  const getIcon = (icon) => {
    switch (icon) {
      case 'html':
        return <i class="devicon-html5-plain-wordmark"></i>
      case 'css':
        return <i class="devicon-css3-plain-wordmark"></i>
      case 'javascript':
        return <i class="devicon-javascript-plain"></i>
      case 'mongodb':
        return <i class="devicon-mongodb-plain-wordmark"></i>
      case 'express':
        return <i class="devicon-express-original-wordmark"></i>
      case 'node':
        return <i class="devicon-nodejs-plain-wordmark"></i>
      case 'react':
        return <i class="devicon-react-original-wordmark"></i>
      case 'postgresql':
        return <i class="devicon-postgresql-plain-wordmark"></i>
      case 'vue':
        return <i class="devicon-vuejs-plain-wordmark"></i>
      case 'flask':
        return <i class="devicon-flask-original-wordmark"></i>
      case 'sqlalchemy':
        return <i class="devicon-sqlalchemy-original-wordmark"></i>
      default:
        return undefined
    }
  }

  return (
    <Container className="icon-container">
      {icons.map((icon, index) => getIcon(icon))}
    </Container>
  )
}

export default TechIcons
