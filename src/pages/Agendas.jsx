import { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router";

export const Agendas = () => {
  const [lista, setLista] = useState([]);

  const fetchAgendas = () =>
    fetch("https://playground.4geeks.com/contact/agendas", {
      method: "GET",
    }).then((response) =>
      response.json().then((data) => {
        console.log(data);
        setLista(data.agendas);
      }),
    );
  useEffect(() => {
    fetchAgendas();
  }, []);

  return (
    <Row>
      {lista.map((item) => (
        <Col sm={6} lg={3} key={item.slug}>
          <Card style={{ width: "18rem", marginBottom: "1rem" }}>
            <Card.Body>
              <Card.Title>{item.slug}</Card.Title>
              <NavLink to={`/agendas/${item.slug}/contacts`}>
                <Button variant="primary">More info</Button>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Agendas;
