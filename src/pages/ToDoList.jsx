import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const TareasLista = () => {
  const [lista, setLista] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [cursorEncima, setCursorEncima] = useState("");

  const getUsuario = () => {
    fetch("https://playground.4geeks.com/todo/users/LuisFlor7", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setLista(response.todos);
      });
  };

  const borrarTarea = (id) => {
    fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
      method: "DELETE",
    }).then(getUsuario());
  };

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    fetch("https://playground.4geeks.com/todo/todos/LuisFlor7", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        label: nuevaTarea,
        is_done: false,
      }),
    }).then(() => {
      setNuevaTarea("");
      getUsuario();
    });
  };

  const manejarTecla = (e) => {
    if (e.key === "Enter") {
      fetch("https://playground.4geeks.com/todo/todos/LuisFlor7", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          label: nuevaTarea,
          is_done: false,
        }),
      }).then(() => {
        setNuevaTarea("");
        getUsuario();
      });
    }
  };

  useEffect(() => {
    getUsuario();
  }, []);

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
                <span className="p-2">{tarea.label}</span>
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
