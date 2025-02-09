import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { isEmpty } from "lodash";

export const PeopleDetails = () => {
  const { id } = useParams();
  const [PeopleDetails, setPeopleDetails] = useState({});

  useEffect(() => {
    const fetchPeopleDetails = () => {
      fetch(`https://www.swapi.tech/api/people/${id}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.result);
          setPeopleDetails(data.result.properties);
        });
    };

    fetchPeopleDetails();
  }, [id]);

  return (
    <>
      <div style={{ padding: "20px" }}>
        {!isEmpty(PeopleDetails) && (
          <>
            <h2>{PeopleDetails.name}</h2>
            <p>
              <strong>Name:</strong> {PeopleDetails.name}
            </p>
            <p>
              <strong>Gender:</strong> {PeopleDetails.gender}
            </p>
            <p>
              <strong>Height:</strong> {PeopleDetails.height}
            </p>
            <p>
              <strong>Link:</strong> {PeopleDetails.url}
            </p>
          </>
        )}
      </div>
    </>
  );
};
