import { useState, useEffect } from "react";

function SolvedRequest() {
  const [response, setResponse] = useState([]);
  async function getData() {
    const result = await fetch(
      "https://opentdb.com/api.php?amount=10&type=boolean"
    );
    const data = await result.json();
    setResponse(data);
    console.log(data);
  }
  return (
    <div>
      <h3>room#</h3>
      <h1>The Problem</h1>
      <h3>tags</h3>
      <p>question</p>
      <p>Problem solution</p>
      <></>
      <br></br>
      <button>expand solution</button>
    </div>
  );
}

export default SolvedRequest;
