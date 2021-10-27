import React from 'react'
import PageTitle from './PageTitle'
import SkillsCard from './SkillsCard'
import { Container, Row } from 'react-bootstrap'
import skillsData from '../data/skillsData'

const About = () => {
  return (
    <div>
      <div className="divider"></div>
      <div className="page about" id="about">
        <div className="introduction-text">
          <p>
            During the pandemic, I started teaching myself C++, and I discovered
            a hidden talent and love for coding. Software development empowers
            me to continue my drive for knowledge, because there's always new
            tech to learn and bugs to squash.
          </p>
        </div>
        <a
          className="resume"
          target="#"
          href="https://drive.google.com/file/d/1DGPqEeeqYnnCOaaZ_Q8UxfTXBep6RKei/view?usp=sharing"
        >
          <Container className="resume-container">
            <i class="fa fa-file"></i>
            <p>My Resume</p>
            <i class="fa fa-external-link"></i>
          </Container>
        </a>
        <Container className="about-container">
          <h2 className="skills-header">Skills</h2>
          <Row className="skills-row">
            <p>Front-End</p>
            <Container className="skills-container">
              {skillsData.frontEnd.map((skill, index) => (
                <SkillsCard key={index} skill={skill} />
              ))}
            </Container>
          </Row>
          <Row className="skills-row">
            <p>Back-End | Database</p>
            <Container className="skills-container">
              {skillsData.backEnd.map((skill, index) => (
                <SkillsCard key={index} skill={skill} />
              ))}
            </Container>
          </Row>
          <Row className="skills-row last-row">
            <p>Other Tech</p>
            <Container className="skills-container">
              {skillsData.other.map((skill, index) => (
                <SkillsCard key={index} skill={skill} />
              ))}
            </Container>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default About
