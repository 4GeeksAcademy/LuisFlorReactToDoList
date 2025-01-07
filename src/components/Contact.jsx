import { useState } from "react";
import { Card, Button } from "react-bootstrap";

export const Contact = ({ contact, slug, fetchContacts }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setname] = useState(contact.name);
  const [address, setaddress] = useState(contact.address);
  const [email, setemail] = useState(contact.email);
  const [phone, setphone] = useState(contact.phone);

  const putContact = () => {
    const inputsContact = {
      name: name,
      phone: phone,
      email: email,
      address: address,
    };

    fetch(
      `https://playground.4geeks.com/contact/agendas/${slug}/contacts/${contact.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputsContact),
      },
    )
      .then(() => fetchContacts())
      .finally(() => setIsEditing(false));
  };

  return (
    <Card key={contact.id} style={{ marginBottom: "1rem" }}>
      <Card.Body>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <h1>{contact.name}</h1>
            <p>Teléfono: {contact.phone}</p>
            <p>Correo electrónico: {contact.email}</p>
            <p>Dirección: {contact.address}</p>
          </div>
        )}
      </Card.Body>
      <Button variant="primary" onClick={() => setIsEditing(!isEditing)}>
        {" "}
        {isEditing ? "Stop Editing" : "Edit"}
      </Button>
      {isEditing && (
        <Button variant="success" onClick={() => putContact()}>
          Save
        </Button>
      )}
    </Card>
  );
};
