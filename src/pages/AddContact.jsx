import { añadirContacto } from "../fetch";
import { dameUsuario } from "../fetch";
import { useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";

export const AddContact = () => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newMail, setNewMail] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const getUsuario = () => {
    dameUsuario().then((response) => {
      console.log(response.agendas);
    });
  };

  const agregarContacto = () => {
    if (newName.trim() === "") return;
    if (newPhone.trim() === "") return;
    if (newMail.trim() === "") return;
    if (newAddress.trim() === "") return;
    añadirContacto().then(() => {
      setNewName("");
      getUsuario();
    });
  };

  return (
    <>
      <h1 className="text-center m-4"> Lista de tareas </h1>
      <div className="d-flex justify-content-center">
        <InputGroup className="mt-4 m-3" style={{ width: "600px" }}>
          <Form.Control
            placeholder="Añade el nombre de tu contacto"
            value={newName}
          />
          <Form.Control
            placeholder="Añade su número de teléfono"
            value={newPhone}
          />
          <Form.Control
            placeholder="Añade tus tareas para hoy"
            value={newMail}
          />
          <Form.Control
            placeholder="Añade tus tareas para hoy"
            value={newAddress}
          />
          <Button variant="outline-primary" onClick={agregarContacto}>
            Añadir nuevo contacto
          </Button>
        </InputGroup>
      </div>
    </>
  );
};
