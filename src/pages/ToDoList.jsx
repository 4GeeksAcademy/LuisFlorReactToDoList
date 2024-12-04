import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const TareasLista = () => {
  const listaInicial = [
    {
      tarea: "Hacer ejercicio",
      id: crypto.randomUUID(),
    },
  ];
  const [lista, setLista] = useState(listaInicial);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [cursorEncima, setCursorEncima] = useState("");

  const borrarTarea = (id) => {
    setLista(
      lista.filter((tarea) => {
        return tarea.id !== id;
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
      <h1 className="text-center m-4"> Lista de tareas </h1>
      <div className="d-flex justify-content-center">
        <InputGroup className="mt-4 m-3" style={{ width: "600px" }}>
          <Form.Control
            placeholder="Añade tus tareas para hoy"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            onKeyUp={manejarTecla}
          />
          <Button variant="outline-primary" onClick={agregarTarea}>
            Añadir tarea
          </Button>
        </InputGroup>
      </div>
      {lista.map((tarea) => {
        return (
          <>
            <div
              className="d-flex justify-content-center"
              onMouseEnter={() => setCursorEncima(tarea.id)}
              onMouseLeave={() => setCursorEncima("")}
            >
              <div
                className="m-2 rounded d-flex justify-content-between"
                style={{
                  width: "600px",
                  border:
                    cursorEncima === tarea.id
                      ? "2px solid blue"
                      : "1px solid grey",
                }}
                key={tarea.id}
                onMouseEnter={() => setCursorEncima(tarea.id)}
                onMouseLeave={() => setCursorEncima("")}
              >
                <span className="p-2">{tarea.tarea}</span>
                <span
                  className="p-2 text-danger"
                  style={{
                    cursor: "pointer",
                    visibility:
                      cursorEncima === tarea.id ? "visible" : "hidden",
                    pointerEvents: cursorEncima === tarea.id ? "auto" : "none",
                  }}
                  onClick={() => {
                    return borrarTarea(tarea.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
