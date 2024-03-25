import React from 'react'
import { Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <div>
      <div className="divider"></div>
      <div className="page contact" id="contact">
        <Container className="contact-container">
          <h2 className="skills-header">Contact</h2>
          <Container className="links">
            <a
              className="nav-contact contact-icon"
              href="https://github.com/lfoster1150"
              target="_blank"
              rel="noreferrer"
            >
              <i className="devicon-github-original"></i>
              GitHub
            </a>
            <a
              className="nav-contact contact-icon"
              href="https://www.linkedin.com/in/luke-foster11/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="devicon-linkedin-plain"></i>
              LinkedIn
            </a>
            <a
              className="nav-contact contact-icon"
              href="mailto:lfoster1150@gmail.com"
            >
              <i className="fa fa-envelope" aria-hidden="true"></i>
              lfoster1150@gmail.com
            </a>
          </Container>
          <Container className="thanks">
            <a
              className="resume contact-resume"
              target="#"
              href="https://drive.google.com/file/d/1fq4keCxp9xbrq0EKnl5RgOVqAONyUpHr/view?usp=drive_link"
            >
              <Container className="resume-container">
                <i className="fa fa-file"></i>
                  <p>Resume</p>
                <i className="fa fa-external-link"></i>
              </Container>
            </a>
            <a className="resume contact-resume" href="#home">
              <Container className="resume-container">
                <p>Back To Top </p>
              </Container>
            </a>
          </Container>
        </Container>
        <div className="divider"></div>
      </div>
    </div>
  )
}

export default Contact
