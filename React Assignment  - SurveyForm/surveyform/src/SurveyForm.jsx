import React, { useState } from 'react';
import { Form, Button, Col, Row, Container, Alert } from 'react-bootstrap';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    voterId: '',
    party: '',
    feedback: '',
    agreeToTerms: false,
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'age' && value !== '') {
      if (!/^\d+$/.test(value)) return;
    }
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
        setAlertMessage('Please fill out all fields and agree to the terms.');
        setAlertVariant('danger');
        setShowAlert(true);
        return;
      }
    }

    // Check if the email is valid
    if (!validateEmail(formData.email)) {
      setAlertMessage('Please enter a valid email address.');
      setAlertVariant('danger');
      setShowAlert(true);
      return;
    }

    // Check if the age is a positive number
    if (formData.age <= 0) {
      setAlertMessage('Please enter a valid age (positive number).');
      setAlertVariant('danger');
      setShowAlert(true);
      return;
    }

    // Form is valid
    setAlertMessage('Form submitted successfully!');
    setAlertVariant('success');
    setShowAlert(true);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="p-4">
        {showAlert && <Alert variant={alertVariant}>{alertMessage}</Alert>}

        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Row>
          <Form.Group as={Col} controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="1"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Row>
          <Form.Group as={Col} controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Control
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group controlId="formCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formVoterId">
          <Form.Label>Voter ID</Form.Label>
          <Form.Control
            name="voterId"
            value={formData.voterId}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formParty">
          <Form.Label>Occupation</Form.Label>
          <Form.Control
            as="select"
            name="party"
            value={formData.party}
            onChange={handleChange}
          >
            <option value="">Choose...</option>
            <option value="Student">Student</option>
            <option value="Doctor">Doctor</option>
            <option value="Engineer">Engineer</option>
            <option value="Government Employee">Government Employee</option>
            <option value="other">Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formFeedback">
          <Form.Label>Feedback</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="feedback"
            value={formData.feedback}
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

export default SurveyForm;
