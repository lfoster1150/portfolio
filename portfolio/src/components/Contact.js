import React from 'react'
import { Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <div>
      <div className="divider"></div>
      <div className="page contact" id="contact">
        <Container>
          <h2 className="skills-header">Contact</h2>
          <Container className="links">
            <a
              className="nav-contact contact-icon"
              href="https://github.com/lfoster1150"
              target="_blank"
            >
              <i class="devicon-github-original"></i>
              GitHub
            </a>
            <a
              className="nav-contact contact-icon"
              href="https://www.linkedin.com/in/luke-foster11/"
              target="_blank"
            >
              <i class="devicon-linkedin-plain"></i>
              LinkedIn
            </a>
            <a
              className="nav-contact contact-icon"
              href="mailto:lfoster1150@gmail.com"
            >
              <i class="fa fa-envelope" aria-hidden="true"></i>
              lfoster1150@gmail.com
            </a>
          </Container>
        </Container>
      </div>
      <div className="divider"></div>
    </div>
  )
}

export default Contact
