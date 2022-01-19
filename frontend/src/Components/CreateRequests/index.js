import react from "react";
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
  return (
    <div>
      <Box
        style={{ marginLeft: "40%", marginTop: "60px", width: "30%" }}
        color="red"
        bgcolor="palevioletred"
        p={1}
      >
        {" "}
        <h2>create a request</h2>
        <label for="room">room#</label>
        <input type="text" id="room"></input>
        <label for="problemTitle">what is your problem</label>
        <input type="text" id="problemTitle"></input>
        <label for="category">Category</label>
        <select id="category">
          <option>react</option>
          <option>github</option>
          <option>JavaScript</option>
          <option>Deployment</option>
          <option>planning</option>
          <option>miscellaneous</option>
        </select>
        <label for="discription">
          Explain in more detail, Include what you have tried
        </label>
        <input type="text" id="discription"></input>
        <label for="help">what assistance do you require?</label>
        <select id="help">
          <option>Come to room</option>
          <option>respond here</option>
        </select>
        <br></br>
        <button>Submit request</button>
      </Box>
    </div>
  );
}

export default CreateRequest;
