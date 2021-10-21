import React from 'react'
import { Modal, Image } from 'react-bootstrap'

const ProjectModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <p>{props.description}</p>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.img} alt={props.description} fluid />
      </Modal.Body>
      <Modal.Footer>
        <p>{props.description}</p>
      </Modal.Footer>
    </Modal>
  )
}

export default ProjectModal
