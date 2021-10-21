import React, { useEffect } from 'react'
import { Modal, Image } from 'react-bootstrap'
import TechIcons from './TechIcons'

const ProjectModal = (props) => {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <p>{props.project.title}</p>
        <TechIcons icons={props.project.icons} />
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
