import React from 'react'
import PageTitle from './PageTitle'
import SkillsCard from './SkillsCard'
import { Container, Row } from 'react-bootstrap'
import skillsData from '../data/skillsData'

const About = () => {
  return (
    <div className="page about" id="about">
      <PageTitle title="ABOUT" />
      <a className="resume" target="#" href="">
        <Container className="resume-container">
          <i class="fa fa-file"></i>
          <p>Resume</p>
          <i class="fa fa-external-link"></i>
        </Container>
      </a>
      <Container>
        <h2>Skills</h2>
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
        <Row className="skills-row">
          <p>Other Tech</p>
          <Container className="skills-container">
            {skillsData.other.map((skill, index) => (
              <SkillsCard key={index} skill={skill} />
            ))}
          </Container>
        </Row>
      </Container>
    </div>
  )
}

export default About
