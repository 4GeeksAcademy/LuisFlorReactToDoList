import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { dameUsuario, deleteContacto } from "../fetch";
import { Container, Row } from "react-bootstrap";

export const ContactList = () => {
  const [lista, setLista] = useState([]);

  const getUsuario = () => {
    dameUsuario().then((response) => {
      setLista(response.agendas);
    });
  };

  const borrarContacto = (id) => {
    deleteContacto(id).then(getUsuario());
  };

  useEffect(() => {
    getUsuario();
  }, []);

  return (
    <>
      <h1 className="text-center m-4"> Lista de agendas </h1>
      <div className="d-flex justify-content-center">
        <Container className="d-flex">
          <Row>
            <Container className="justifyContentEnd">
              <span className="p-2 text-danger" onClick={() => {}}>
                <FontAwesomeIcon icon={faPen} />
              </span>
              <span
                className="p-2 text-danger"
                onClick={() => {
                  return borrarContacto();
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </Container>
          </Row>
        </Container>
      </div>
    </>
  );
};
