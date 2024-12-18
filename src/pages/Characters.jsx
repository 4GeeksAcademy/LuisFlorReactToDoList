import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const fecthCharacters = () => {
    fetch("https://www.swapi.tech/api/people", {
      method: "GET",
    }).then((response) =>
      response.json().then((data) => {
        console.log(data.results);
        setCharacters(data.results);
      }),
    );
  };

  useEffect(() => {
    fecthCharacters();
  }, []);

  return (
    <>
      <ul>
        {characters.map((item) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.url}</Card.Text>
                <Button variant="primary">More info</Button>
              </Card.Body>
            </Card>
          );
        })}
      </ul>
    </>
  );
};
