import {useState, useEffect} from "react";

import RequestPost from "../RequestPost";
import ResponseSection from "../ResponseSection";

function Request({ id, title, body, category, date, room, userId }) {

  //fetch data about the responses to this specific request (fetch from the db)
  //state to store the list of responses - done
  //useEffect to make the fetch request

  const [responsesList, setResponsesList] = useState([]);

  useEffect( () => {
    async function fetchResponses() {
      // fetch the data
      // https://week-project.herokuapp.com/response/:request_id
      const res = await fetch(`https://week-project.herokuapp.com/response/${id}`);
      const json = await res.json();
      setResponsesList(json.Payload);
    }
    fetchResponses();
  }, [id])

  return (
    <div>
      {responsesList.map((response) => {
        return <p>{response.body}</p>
      } )}
      <RequestPost
        title={title}
        body={body}
        category={category}
        date={date}
        room={room}
        userId={userId}
      />
      <ResponseSection />
    </div>
  );
}

export default Request;
