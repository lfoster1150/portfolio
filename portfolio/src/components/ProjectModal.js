import React from 'react'
import { Modal, Image } from 'react-bootstrap'

const ProjectModal = (props) => {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <p>{props.project.title}</p>
      </Modal.Header>
      <Modal.Body>
        <Image
          src={props.project.modalImage}
          alt={props.project.description}
          fluid
        />
      </Modal.Body>
      <Modal.Footer>
        <p>{props.project.fullDescription}</p>
      </Modal.Footer>
    </Modal>
  )
}

export default ProjectModal
