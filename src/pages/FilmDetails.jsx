import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const FilmDetails = () => {
  const { uid } = useParams();
  const [filmDetails, setfilmDetails] = useState({});

  useEffect(() => {
    const fetchfilmDetails = () => {
      fetch(`https://www.swapi.tech/api/films/${uid}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.result);
          setfilmDetails(data.result.properties);
        });
    };

    fetchfilmDetails();
  }, [uid]);

  return (
    <div style={{ padding: "20px" }}>
      {!isEmpty(filmDetails) && (
        <>
          <h2>{filmDetails.title}</h2>
          <p>
            <strong></strong> {filmDetails.opening_crawl} km
          </p>
          <p>
            <strong>Created:</strong> {filmDetails.created}
          </p>
          <p>
            <strong>Directed by:</strong> {filmDetails.director}
          </p>
          <p>
            <strong>Produced by:</strong> {filmDetails.producer}
          </p>
        </>
      )}
      {/* Muestra más detalles si es necesario */}
    </div>
  );
};
