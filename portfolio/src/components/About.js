import React from 'react'
import SkillsCard from './SkillsCard'
const About = () => {
  return (
    <div className="page about" id="about">
      <div className="about-text">
        <a className="resume" target="#" href="">
          <i class="fa fa-file"></i>
          <p>Resume</p>
        </a>
        <SkillsCard />
      </div>
    </div>
  )
}

export default About
