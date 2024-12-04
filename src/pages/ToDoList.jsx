import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

export const TareasLista = () => {
  const listaInicial = [
    {
      tarea: "Hacer ejercicio",
      id: crypto.randomUUID(),
    },
  ];
  const [lista, setLista] = useState(listaInicial);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [cursorEncima, setCursorEncima] = useState(null);

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

  const manejarTecla = (e) => {
    if (e.key === "Enter") {
      agregarTarea();
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <InputGroup className="mt-4 m-3" style={{ width: "600px" }}>
          <Form.Control
            placeholder="Añade tus tareas cotidianas"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            onKeyUp={manejarTecla}
          />
          <Button variant="outline-primary" onClick={agregarTarea}>
            Añadir tarea
          </Button>
        </InputGroup>
      </div>
      {lista.map((Element) => {
        return (
          <>
            <div
              className="d-flex justify-content-center"
              onMouseEnter={() => setCursorEncima(Element.id)}
              onMouseLeave={() => setCursorEncima(null)}
            >
              <div
                className="m-2 rounded d-flex justify-content-between"
                style={{
                  width: "600px",
                  border:
                    cursorEncima === Element.id
                      ? "2px solid blue"
                      : "1px solid grey",
                }}
                key={Element.id}
                onMouseEnter={() => setCursorEncima(Element.id)}
                onMouseLeave={() => setCursorEncima(null)}
              >
                <p className="p-2">{Element.tarea}</p>
                <strong
                  className="p-2 text-danger"
                  style={{
                    cursor: "pointer",
                    visibility:
                      cursorEncima === Element.id ? "visible" : "hidden",
                    pointerEvents:
                      cursorEncima === Element.id ? "auto" : "none",
                  }}
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
