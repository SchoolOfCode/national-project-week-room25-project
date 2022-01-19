import {useState} from "react";
import Box from "@material-ui/core/Box";
//create a submit box with post functionality
//We need to create a text input box
// seperate text box for room number
// text box for discription and what you have tried
// text box for tags
// text box for what assistance you require

// change h3 to labels
// make state to track inputs of the user
//
function CreateRequest() {

  const [userInput, setUserInput] = useState({category: "miscellaneous", help: "respond here"});

  function handleOnChange(e) {
    //get the user's input
    //get which input element was activated
    //update the state for that input element
    const text = e.target.value;
    const element = e.target.id;
    setUserInput({...userInput, [element]: text});
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userInput);
  }

  return (
    <div>
      <Box
        style={{ marginLeft: "40%", marginTop: "60px", width: "30%" }}
        color="red"
        bgcolor="palevioletred"
        p={1}
      >
        {" "}
        <form onSubmit={handleSubmit}>
          <h2>create a request</h2>
          <label htmlFor="room">room#</label>
          <input type="number" id="room" onChange={handleOnChange} required></input>
          <label htmlFor="problemTitle">what is your problem</label>
          <input type="text" id="problemTitle" onChange={handleOnChange} required></input>
          <label htmlFor="category">Category</label>
          <select id="category" onChange={handleOnChange} required>
            <option defaultValue>miscellaneous</option>
            <option>react</option>
            <option>github</option>
            <option>JavaScript</option>
            <option>Deployment</option>
            <option>planning</option>
          </select>
          <label htmlFor="discription">
            Explain in more detail, Include what you have tried
          </label>
          <input type="text" id="discription" onChange={handleOnChange} required></input>
          <label htmlFor="help">what assistance do you require?</label>
          <select id="help" onChange={handleOnChange} required>
            <option defaultValue>respond here</option>
            <option>Come to room</option>
          </select>
          <br></br>
          <button>Submit request</button>
        </form>
      </Box>
    </div>
  );
}

export default CreateRequest;
