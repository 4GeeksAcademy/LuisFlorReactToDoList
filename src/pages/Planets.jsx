import { useEffect, useState, useContext } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FavouritesContext } from "./Favourites";

export const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const { favs, addFavs, deleteFavs, isFav } = useContext(FavouritesContext);

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

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <>
      <Row>
        {planets.map((item) => {
          return (
            <Col sm={6} lg={3}>
              <Card key={item.uid} style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.uid}</Card.Text>
                  <NavLink to={`/planets/${item.uid}`}>
                    <Button variant="primary">More info</Button>
                  </NavLink>
                  <Button
                    className="m-1"
                    variant="warning"
                    onClick={() => {
                      isFav(item.uid, "planets")
                        ? deleteFavs(item.uid, "planets")
                        : addFavs(item.uid, "planets", item.name);
                    }}
                  >
                    {isFav(item.uid, "planets") ? "Unfav" : "Fav"}
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
