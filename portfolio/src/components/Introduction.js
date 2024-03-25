import React from 'react'
import { Container } from 'react-bootstrap'

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
            Electrical Engineering and an obsession with learning new skills and
            technologies.
          </p>
        </div>
        <Container className="intro-links">
          <a
            className="nav-contact"
            href="https://github.com/lfoster1150"
            target="_blank"
            rel="noreferrer"
          >
            <i className="devicon-github-original"></i>
          </a>
          <a
            className="nav-contact"
            href="https://www.linkedin.com/in/luke-foster11/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a className="nav-contact" href="mailto:lfoster1150@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </Container>
        <a
          className="resume"
          target="#"
          href="https://drive.google.com/file/d/1fq4keCxp9xbrq0EKnl5RgOVqAONyUpHr/view?usp=drive_link"
        >
          <Container className="resume-container">
            <p>Resume</p>
            <i className="fa fa-file"></i>
          </Container>
        </a>
      </Container>
    </div>
  )
}

export default Introduction
