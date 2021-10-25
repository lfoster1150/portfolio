import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'
import emailjs, { init } from 'emailjs-com'
init('user_7SjHsKtKCnWnzgbbZg13V')

const ContactMe = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_5b87ukd',
        'template_fy11p48',
        form.current,
        'user_7SjHsKtKCnWnzgbbZg13V'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <Container className="contact-me-container">
      <form className="contact-me-form" ref={form} onSubmit={sendEmail}>
        <label>Your Name:</label>
        <input type="text" name="user_name" />
        <label>Your Email:</label>
        <input type="email" name="user_email" />
        <label>Message:</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="resume submit-button" />
      </form>
    </Container>
  )
}

export default ContactMe
