import React from 'react'
import { Modal, Image, Container } from 'react-bootstrap'
import TechIcons from './TechIcons'

const ProjectModal = (props) => {
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton closeVariant="white">
        <p>{props.project.title}</p>
        <Container className="modal-links">
          { props.project.deployed.length > 0 && (
              <a href={props.project.deployed} target="_blank" rel="noreferrer">
                <i className="fa fa-external-link"></i>
                Deployed Website
              </a>
          )}
          <a href={props.project.github} target="_blank" rel="noreferrer">
            <i className="devicon-github-original"></i>
            GitHub Repo
          </a>
        </Container>
      </Modal.Header>

      <Modal.Body>
        {props.project.fullDescription.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
        <TechIcons icons={props.project.icons} />
        <p>{props.project.note}</p>
      </Modal.Body>
      <Modal.Footer>
        <a href={props.project.deployed} target="_blank" rel="noreferrer">
          <Image
            src={props.project.modalImage}
            alt={props.project.description}
            fluid="true"
          />
        </a>
      </Modal.Footer>
    </Modal>
  )
}

export default ProjectModal
