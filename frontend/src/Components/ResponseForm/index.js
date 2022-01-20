import { useState } from "react";

function ResponseForm({ addResponseToList }) {
  //state to track user input
  //handle onChange function to change the state
  //handle submit function

  const [userInput, setUserInput] = useState();

  function handleOnChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userInput.trim() !== "") {
      addResponseToList({
        body: userInput,
      });
      e.target.reset();
      setUserInput("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="textBox"
        name="response-body"
        onChange={handleOnChange}
      ></textarea>
      <br></br>
      <button id="submit-response-button" className="btn btn-success">Submit Response</button>
    </form>
  );
}

export default ResponseForm;

/*
{
"user_id":2, // stored in App - done
"request_id":3, // stored in ResponseSection - done
"body":"This os the body of the first response", // comes from the user in ResponseForm - done
"response_date":"20/01/2022", // generate with JS
"vote_count":7 // always starts at 0

}

*/
