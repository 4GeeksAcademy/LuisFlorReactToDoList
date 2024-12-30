import { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router";
import { useContext } from "react";
import { FavouritesContext } from "./Favourites";

export const Characters = () => {
  const [people, setPeople] = useState([]);
  const { favs, addFavs, deleteFavs, isFav } = useContext(FavouritesContext);

  const fecthPeople = () => {
    fetch("https://www.swapi.tech/api/people", {
      method: "GET",
    }).then((response) =>
      response.json().then((data) => {
        console.log(data.results);
        setPeople(data.results);
      }),
    );
  };

  useEffect(() => {
    fecthPeople();
  }, []);

  return (
    <>
      <Row>
        {people.map((item) => {
          return (
            <Col sm={6} lg={3} className="m-2">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.url}</Card.Text>
                  <NavLink to={`/people/${item.uid}`}>
                    <Button variant="primary">More info</Button>
                  </NavLink>
                  <Button
                    className="m-1"
                    variant="warning"
                    onClick={() => {
                      isFav(item.uid, "people")
                        ? deleteFavs(item.uid, "people")
                        : addFavs(item.uid, "people", item.name);
                    }}
                  >
                    {isFav(item.uid, "people") ? "Unfav" : "Fav"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
