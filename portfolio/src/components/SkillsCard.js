import React from 'react'

const SkillsCard = (props) => {
  const getIcon = (icon) => {
    switch (icon) {
      case 'html':
        return <i className="devicon-html5-plain"></i>
      case 'css':
        return <i className="devicon-css3-plain"></i>
      case 'javascript':
        return <i className="devicon-javascript-plain"></i>
      case 'mongodb':
        return <i className="devicon-mongodb-plain"></i>
      case 'express':
        return <i className="devicon-express-original"></i>
      case 'node':
        return <i className="devicon-nodejs-plain"></i>
      case 'react':
        return <i className="devicon-react-original"></i>
      case 'postgresql':
        return <i className="devicon-postgresql-plain"></i>
      case 'vue':
        return <i className="devicon-vuejs-plain"></i>
      case 'flask':
        return <i className="devicon-flask-original"></i>
      case 'sqlalchemy':
        return <i className="devicon-sqlalchemy-plain"></i>
      case 'bootstrap':
        return <i className="devicon-bootstrap-plain"></i>
      case 'c++':
        return <i className="devicon-cplusplus-plain"></i>
      case 'sequelize':
        return <i className="devicon-sequelize-plain"></i>
      case 'python':
        return <i className="devicon-python-plain"></i>
      case 'aws':
        return <i className="devicon-amazonwebservices-plain-wordmark"></i>
      case 'git':
        return <i className="devicon-git-plain"></i>
      case 'heroku':
        return <i className="devicon-heroku-plain"></i>
      case 'npm':
        return <i className="devicon-npm-original-wordmark"></i>
      case 'ubuntu':
        return <i className="devicon-ubuntu-plain"></i>
      case 'vscode':
        return <i className="devicon-vscode-plain"></i>
      case 'ruby':
        return <i className="devicon-ruby-plain"></i>
      case 'rails':
        return <i className="devicon-rails-plain"></i>
      case 'typescript':
        return <i className="devicon-typescript-plain"></i>
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
