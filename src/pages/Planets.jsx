import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

export const Planets = () => {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = () => {
    fetch("https://www.swapi.tech/api/planets", {
      method: "GET",
    }).then((response) =>
      response.json().then((data) => {
        console.log(data.results);
        setPlanets(data.results);
      }),
    );
  };

  const fetchMoreInfo = () => {
    fetch(`https://www.swapi.tech/api/planets/${item.uid}`, {
      method: "GET",
    }).then((response) =>
      response.json().then((data) => {
        console.log(data);
      }),
    );
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <>
      <ul>
        {planets.map((item) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.url}</Card.Text>
                <Button variant="primary" onClick={fetchMoreInfo}>
                  More info
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </ul>
    </>
  );
};
