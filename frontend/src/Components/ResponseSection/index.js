import ResponseList from "../ResponseList";
import ResponseForm from "../ResponseForm";
import { useState, useEffect } from "react";
import React from "react";

function ResponseSection({ id, currentUserId }) {
  const [responsesList, setResponsesList] = useState([]);
  const [areResponsesVisible, setAreResponsesVisible] = useState(false);

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

  async function addResponseToList(response) {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //response.body to access user's input
    // make a fetch post request to "https://week-project.herokuapp.com/response"
    const res = await fetch("https://week-project.herokuapp.com/response", {
      method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "user_id": currentUserId,
            "request_id": id,
            "body": response.body,
            "response_date": date,
            "vote_count": 0
          })
    })
    const json = await res.json();
    setResponsesList([...responsesList, json.Payload[0]]);
  }

  function toggleResponsesVisibility() {
    setAreResponsesVisible(!areResponsesVisible);
}

  return (
    <div>
      <button onClick={toggleResponsesVisibility}>View Responses</button>
      <div style={areResponsesVisible ? {visibility: "visible", height: "auto"} : {visibility : "hidden", height: 0}}>
        <ResponseList responsesList={responsesList} />
        <ResponseForm currentUserId={currentUserId} addResponseToList={addResponseToList} />
      </div>
    </div>
  );
}

export default ResponseSection;

// give the response list state to the response list compenent as a prop
