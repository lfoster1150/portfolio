import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Introduction = () => {
  return (
    <div className="page introduction" id="home">
      <Container className="name-container">
        <Container>
          <h1 className="name">Luke Foster</h1>
          <h5 className="sub-name">Software Engineer</h5>
        </Container>
        <div className="introduction-text">
          <br></br>
          <p>
            I’m a Software Engineer with a background in Manufacturing and
            Electrical Engineering, and an obsession with learning new skills
            and technologies.
          </p>
        </div>
        <Container className="intro-links">
          <a
            className="nav-contact"
            href="https://github.com/lfoster1150"
            target="_blank"
          >
            <i class="devicon-github-original"></i>
          </a>
          <a
            className="nav-contact"
            href="https://www.linkedin.com/in/luke-foster11/"
            target="_blank"
          >
            <i class="devicon-linkedin-plain"></i>
          </a>
          <a className="nav-contact" href="mailto:lfoster1150@gmail.com">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </a>
          <a className="intro-resume" target="#" href="">
            <Container className="intro-resume-container">
              <p>Resume</p>
              <i class="fa fa-file"></i>
            </Container>
          </a>
        </Container>
      </Container>
    </div>
  )
}

export default Introduction
