import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router";
import { FavouritesContext } from "./Favourites";
import { useContext } from "react";

export const Films = () => {
  const [films, setFilms] = useState([]);
  const { favs, addFavs, deleteFavs, isFav } = useContext(FavouritesContext);

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
      <Row>
        {films.map((item) => {
          return (
            <Col sm={6} lg={3} className="m-2">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item.properties.title}</Card.Title>
                  <Card.Text>
                    Directer by el cabesa de kiko de{" "}
                    <strong>{item.properties.director}</strong>
                  </Card.Text>
                  <NavLink to={`/films/${item.uid}`}>
                    <Button className="m-1" variant="primary">
                      More info
                    </Button>
                  </NavLink>
                  <Button
                    className="m-1"
                    variant="warning"
                    onClick={() => {
                      isFav(item.uid, "film")
                        ? deleteFavs(item.uid, "film")
                        : addFavs(item.uid, "film", item.properties.title);
                    }}
                  >
                    {isFav(item.uid, "film") ? "Unfav" : "Fav"}
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
