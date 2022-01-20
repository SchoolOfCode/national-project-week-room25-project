import {useState} from "react";

function Response({ response }) {

  const [currentVoteCount, setCurrentVoteCount] = useState(response.vote_count);

  async function handleUpVote() {
    const res = await fetch(`https://week-project.herokuapp.com/response/${response.response_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "vote_count": 1
      })
    })
    const json = await res.json();
    setCurrentVoteCount(json.Payload[0].vote_count);
  }

  return (
    <div>
      <p>{response.response_date}</p>
      <p>{currentVoteCount}</p>
      <button onClick={handleUpVote}>Up Vote</button>
      <p>{response.body}</p>
    </div>
  );
}

export default Response;
