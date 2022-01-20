import ResponseList from "../ResponseList";
import ResponseForm from "../ResponseForm";
import { useState, useEffect } from "react";
import React from "react";

function ResponseSection({ id }) {
  const [responsesList, setResponsesList] = useState([]);

  useEffect(() => {
    async function fetchResponses() {
      // fetch the data
      // https://week-project.herokuapp.com/response/:request_id
      const res = await fetch(
        `https://week-project.herokuapp.com/response/${id}`
      );
      const json = await res.json();
      setResponsesList(json.Payload);
    }
    fetchResponses();
  }, [id]);

  return (
    <div>
      <ResponseList responsesList={responsesList} />

      <ResponseForm />
    </div>
  );
}

export default ResponseSection;

// give the response list state to the response list compenent as a prop
