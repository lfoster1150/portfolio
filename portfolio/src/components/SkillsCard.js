import React from 'react'

const SkillsCard = (props) => {
  const getIcon = (icon) => {
    switch (icon) {
      case 'html':
        return <i class="devicon-html5-plain"></i>
      case 'css':
        return <i class="devicon-css3-plain"></i>
      case 'javascript':
        return <i class="devicon-javascript-plain"></i>
      case 'mongodb':
        return <i class="devicon-mongodb-plain"></i>
      case 'express':
        return <i class="devicon-express-original"></i>
      case 'node':
        return <i class="devicon-nodejs-plain"></i>
      case 'react':
        return <i class="devicon-react-original"></i>
      case 'postgresql':
        return <i class="devicon-postgresql-plain"></i>
      case 'vue':
        return <i class="devicon-vuejs-plain"></i>
      case 'flask':
        return <i class="devicon-flask-original"></i>
      case 'sqlalchemy':
        return <i class="devicon-sqlalchemy-plain"></i>
      case 'bootstrap':
        return <i class="devicon-bootstrap-plain"></i>
      case 'c++':
        return <i class="devicon-cplusplus-plain"></i>
      case 'sequelize':
        return <i class="devicon-sequelize-plain"></i>
      case 'python':
        return <i class="devicon-python-plain"></i>
      case 'aws':
        return <i class="devicon-amazonwebservices-original"></i>
      case 'git':
        return <i class="devicon-git-plain"></i>
      case 'heroku':
        return <i class="devicon-heroku-plain"></i>
      case 'npm':
        return <i class="devicon-npm-original-wordmark"></i>
      case 'ubuntu':
        return <i class="devicon-ubuntu-plain"></i>
      case 'vscode':
        return <i class="devicon-vscode-plain"></i>
      case 'ruby':
        return <i class="devicon-ruby-plain"></i>
      case 'rails':
        return <i class="devicon-rails-plain"></i>
      case 'typescript':
        return <i class="devicon-typescript-plain"></i>
      default:
        return undefined
    }
  }

  return (
    <div className="skill-card">
      {getIcon(props.skill.icon)}
      <p>{props.skill.title}</p>
    </div>
  )
}

export default SkillsCard
