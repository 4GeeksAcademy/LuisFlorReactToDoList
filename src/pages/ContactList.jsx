import { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useParams, NavLink } from "react-router";

export const ContactList = () => {
  const [lista, setLista] = useState([]);
  let { slug } = useParams();

  const fetchContacts = (slug) =>
    fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
      method: "GET",
    }).then((response) =>
      response.json().then((data) => {
        console.log(data);
        setLista(data.contacts || []);
      }),
    );
  useEffect(() => {
    fetchContacts(slug);
  }, [slug]);

  return (
    <>
      <h1 className="m-4">Contactos de {slug}</h1>
      <Row>
        <ul>
          {lista.map((item) => (
            <Col sm={6} lg={3} className="m-4">
              <Card key={item.id} style={{ marginBottom: "1rem" }}>
                <Card.Body>
                  <h1>{item.name}</h1>
                  <p>Teléfono: {item.phone}</p>
                  <p>Correo electrónico: {item.email}</p>
                  <p>Dirección: {item.address}</p>
                </Card.Body>
                <NavLink to={`/agendas/${item.slug}/editcontact`}>
                  <Button variant="primary">Edit contact</Button>
                </NavLink>
              </Card>
            </Col>
          ))}
        </ul>
      </Row>
    </>
  );
};
