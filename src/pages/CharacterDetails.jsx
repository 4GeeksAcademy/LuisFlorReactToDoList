import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { isEmpty } from "lodash";

export const CharacterDetails = () => {
  const { uid } = useParams();
  const [characterDetails, setCharacterDetails] = useState({});

  useEffect(() => {
    const fetchCharacterDetails = () => {
      fetch(`https://www.swapi.tech/api/people/${uid}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.result);
          setCharacterDetails(data.result.properties);
        });
    };

    fetchCharacterDetails();
  }, [uid]);

  return (
    <>
      <div style={{ padding: "20px" }}>
        {!isEmpty(characterDetails) && (
          <>
            <h2>{characterDetails.name}</h2>
            <p>
              <strong>Name:</strong> {characterDetails.name}
            </p>
            <p>
              <strong>Gender:</strong> {characterDetails.gender}
            </p>
            <p>
              <strong>Height:</strong> {characterDetails.height}
            </p>
            <p>
              <strong>Link:</strong> {characterDetails.url}
            </p>
          </>
        )}
      </div>
    </>
  );
};
