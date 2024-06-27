import React, { useState } from 'react';
import { Form, Button, Container, Modal } from 'react-bootstrap';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalVariant, setModalVariant] = useState('success');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    for (let key in formData) {
      if (formData[key] === '' || (key === 'agreeToTerms' && !formData[key])) {
        setModalMessage('Please fill out all fields and agree to the terms.');
        setModalVariant('danger');
        setShowModal(true);
        return;
      }
    }

    // Check if the email is valid
    if (!validateEmail(formData.email)) {
      setModalMessage('Please enter a valid email address.');
      setModalVariant('danger');
      setShowModal(true);
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setModalMessage('Passwords do not match.');
      setModalVariant('danger');
      setShowModal(true);
      return;
    }

    // Form is valid
    setModalMessage('Form submitted successfully!');
    setModalVariant('success');
    setShowModal(true);
  };

  return (
    <Container className='wd-50'>
      <Form onSubmit={handleSubmit} className="p-4">
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{modalVariant === 'success' ? 'Success' : 'Error'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Form.Group controlId="formFirstName" >
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formLastName" >
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formAgreeToTerms">
          <Form.Check
            type="checkbox"
            label="I agree to the terms and conditions"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
