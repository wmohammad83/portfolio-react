import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ContactForm.css"

function ContactForm() {
  return (
    <Form>
      <Form.Group className="mb-1" controlId="contactForm">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="contactForm">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactForm">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter message" />
      </Form.Group>
      <Button className="sub-btn" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
