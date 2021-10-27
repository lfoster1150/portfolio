import React, { useEffect } from 'react'
import { Modal, Image, Container, Row } from 'react-bootstrap'
import TechIcons from './TechIcons'

const ProjectModal = (props) => {
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton closeVariant="white">
        <p>{props.project.title}</p>
        <Container className="modal-links">
          <a href={props.project.deployed} target="_blank">
            <i class="fa fa-external-link"></i>
            Deployed Website
          </a>
          <a href={props.project.github} target="_blank">
            <i class="devicon-github-original"></i>
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
        <a href={props.project.deployed} target="_blank">
          <Image
            src={props.project.modalImage}
            alt={props.project.description}
            fluid
          />
        </a>
      </Modal.Footer>
    </Modal>
  )
}

export default ProjectModal
