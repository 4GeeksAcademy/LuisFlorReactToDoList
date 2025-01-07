import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export const EditContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  let { slug, id } = useParams();

  const putContact = () => {
    const inputsContact = {
      name: name,
      phone: phone,
      email: mail,
      address: address,
    };

    fetch(
      `https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputsContact),
      },
    ).then(() => {
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
          <Button
            variant="danger"
            className="p-2 m-2"
            onClick={() => navigate(-1)}
          >
            Return
          </Button>
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

            <Button variant="primary" type="submit" onClick={putContact}>
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
