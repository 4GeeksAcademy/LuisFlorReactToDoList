import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

const listaInicial = [
  {
    tarea: "Hacer ejercicio",
    id: crypto.randomUUID(),
  },
];

export const TareasLista = () => {
  const [lista, setLista] = useState(listaInicial);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const borrarTarea = (id) => {
    setLista(
      lista.filter((Element) => {
        return Element.id !== id;
      }),
    );
  };

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    const tareaNueva = { tarea: nuevaTarea, id: crypto.randomUUID() };
    setLista([...lista, tareaNueva]);
    setNuevaTarea("");
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <InputGroup className="mt-4 m-3" style={{ width: "600px" }}>
          <Form.Control
            placeholder="Añade tus tareas cotidianas"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
          />
          <Button variant="outline-secondary" onClick={agregarTarea}>
            Añadir tarea
          </Button>
        </InputGroup>
      </div>
      {lista.map((Element) => {
        return (
          <>
            <div className="d-flex justify-content-center">
              <div
                className="m-2 border border-2 border-info rounded d-flex justify-content-between"
                style={{ width: "600px" }}
                key={Element.id}
              >
                <p className="p-2">{Element.tarea}</p>
                <strong
                  className="p-2 text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    return borrarTarea(Element.id);
                  }}
                >
                  X
                </strong>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
