import { useState } from "react";
import Box from "@material-ui/core/Box";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";

//create a submit box with post functionality
//We need to create a text input box
// seperate text box for room number
// text box for discription and what you have tried
// text box for tags
// text box for what assistance you require

// change h3 to labels
// make state to track inputs of the user
//test the branch

function CreateRequest({ setSubmittedRequest }) {

  const [userInput, setUserInput] = useState({
    category: "miscellaneous",
    help: "respond here",
  });

  function handleOnChange(e) {
    //get the user's input
    //get which input element was activated
    //update the state for that input element
    const text = e.target.value;
    const element = e.target.id;
    setUserInput({ ...userInput, [element]: text });
  }

  function handleSubmit(e) {
    e.preventDefault();
    //Post request should be here
    setSubmittedRequest(userInput);
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
          <input
            type="number"
            id="room"
            onChange={handleOnChange}
            required
          ></input>
          <label htmlFor="problemTitle">what is your problem</label>
          <input
            type="text"
            id="problemTitle"
            onChange={handleOnChange}
            required
          ></input>
          <label htmlFor="category">Category</label>
          <select id="category" onChange={handleOnChange} required>
            <option defaultValue>miscellaneous</option>
            <option>react</option>
            <option>github</option>
            <option>JavaScript</option>
            <option>Deployment</option>
            <option>planning</option>
          </select>
          <label htmlFor="description">
            Explain in more detail, Include what you have tried
          </label>

          <textarea
            id="description"
            onChange={handleOnChange}
            required
          ></textarea>

          <label htmlFor="help">what assistance do you require?</label>
          <select id="help" onChange={handleOnChange} required>
            <option defaultValue>respond here</option>
            <option>Come to room</option>
          </select>
          <br></br>
          <button type="button" className="btn btn-success">
            Success
          </button>
        </form>
      </Box>

      <form action="/action_page.php">
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" placeholder="Enter email" id="email"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <div class="form-group">
    <label for="pwd">Title</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <div class="form-group">
    <label for="pwd">Category</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <div class="form-group">
    <label for="pwd">Rome</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <div class="form-group">
    <label for="pwd">Date</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <div class="form-group form-check">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox"/> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default CreateRequest;
