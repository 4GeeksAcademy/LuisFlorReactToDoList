import { useEffect, useState } from "react";
import { Row, Button, Col } from "react-bootstrap";
import { useParams, NavLink } from "react-router";
import { Contact } from "../components/Contact";

export const ContactList = () => {
  const [lista, setLista] = useState([]);
  let { slug } = useParams();
  const fetchContacts = () =>
    fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
      method: "GET",
    }).then((response) =>
      response.json().then((data) => {
        console.log(data);
        setLista(data.contacts || []);
      }),
    );
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <>
      <h1 className="m-4">Contactos de {slug}</h1>
      <NavLink to={`/agendas/${slug}/addcontact`}>
        <Button variant="success">Add new contact</Button>
      </NavLink>
      <Row>
        <ul>
          {lista.map((item) => (
            <Col sm={6} lg={3} className="m-4">
              <Contact
                contact={item}
                slug={slug}
                fetchContacts={fetchContacts}
              />
            </Col>
          ))}
        </ul>
      </Row>
    </>
  );
};
