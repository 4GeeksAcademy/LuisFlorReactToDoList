import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

const AddContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  let { slug } = useParams();

  const postContact = () => {
    const inputsContact = {
      name: name,
      phone: phone,
      email: mail,
      address: address,
    };

    fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputsContact),
    }).then(() => {
      setName("");
      setMail("");
      setPhone("");
      setAddress("");
    });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center m-5">
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupDireccion">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={postContact}>
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddContact;
