import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PlanetDetails = () => {
  const { uid } = useParams();
  const [planetDetails, setPlanetDetails] = useState({});

  useEffect(() => {
    const fetchPlanetDetails = () => {
      fetch(`https://www.swapi.tech/api/planets/${uid}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.result);
          setPlanetDetails(data.result.properties);
        });
    };

    fetchPlanetDetails();
  }, [uid]);

  return (
    <div style={{ padding: "20px" }}>
      {!isEmpty(planetDetails) && (
        <>
          <h2>{planetDetails.name}</h2>
          <p>
            <strong>Climate:</strong> {planetDetails.climate}
          </p>
          <p>
            <strong>Terrain:</strong> {planetDetails.terrain}
          </p>
          <p>
            <strong>Population:</strong> {planetDetails.population}
          </p>
          <p>
            <strong>Diameter:</strong> {planetDetails.diameter} km
          </p>
          <p>
            <strong>Orbital Period:</strong> {planetDetails.orbital_period} days
          </p>
        </>
      )}
    </div>
  );
};
