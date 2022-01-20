import { useEffect, useState } from "react";

function Response({ response }) {
  const [currentVoteCount, setCurrentVoteCount] = useState(response.vote_count);
  const [user, setUser] = useState();

  async function handleUpVote() {
    console.log("upvote test");
    const res = await fetch(
      `https://week-project.herokuapp.com/response/${response.response_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vote_count: 1,
        }),
      }
    );
    const json = await res.json();
    setCurrentVoteCount(json.Payload[0].vote_count);
  }

  useEffect(() => {
    async function getUserName() {
      const res = await fetch(
        `https://week-project.herokuapp.com/users/${response.user_id}`
      );
      const json = await res.json();
      setUser(`${json.Payload[0].first_name} ${json.Payload[0].last_name}`);
    }
    getUserName();
  }, []);

  return (
    <div>
      <p>{user}</p>
      <p>{response.response_date}</p>
      <p>{currentVoteCount}</p>
      <button onClick={handleUpVote}>Up Vote</button>
      <p>{response.body}</p>
    </div>
  );
}

export default Response;
