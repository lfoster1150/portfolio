import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

const TechIcons = (props) => {
  const { icons } = props

  const getIcon = (icon) => {
    switch (icon) {
      case 'html':
        console.log(icon)
        return <i class="devicon-html5-plain-wordmark colored"></i>
      case 'css':
        console.log(icon)
        return <i class="devicon-css3-plain-wordmark colored"></i>
      case 'javascript':
        console.log(icon)
        return <i class="devicon-javascript-plain colored"></i>
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
