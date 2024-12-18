import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

export const Films = () => {
  const [films, setFilms] = useState([]);

  const fetchFilms = () => {
    fetch("https://www.swapi.tech/api/films", {
      method: "GET",
    })
      .then((response) => response.json())
      //Si la promesa es fullfilled me hace el json que ees manejable y esos datos para utilizarlos le ponemos el nombre data
      .then((data) => {
        console.log(data.result);
        setFilms(data.result);
      });
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <>
      <ul>
        {films.map((item) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{item.properties.title}</Card.Title>
                <Card.Text>
                  Directer by el cabesa de kiko de{" "}
                  <strong>{item.properties.director}</strong>
                </Card.Text>
                <Button variant="primary">More info</Button>
              </Card.Body>
            </Card>
          );
        })}
      </ul>
    </>
  );
};
