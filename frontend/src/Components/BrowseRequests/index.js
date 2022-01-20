import react from "react";
import Box from "@material-ui/core/Box";

function browseRequest() {
  return (
    <div>
      <div class="input-group">
  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Choose...</option>
    <option value="1">My github is messing up</option>
    <option value="2"> How can I adapt to writing more code?</option>
    <option value="3"> May please get the video for week 4 day 4?</option>
  </select>
  <button class="btn btn-outline-secondary" type="button">Button</button>
</div>
      <Box
        style={{ marginLeft: "40%", marginTop: "60px", width: "30%" }}
        color="red"
        bgcolor="palevioletred"
        p={1}
      >
        {" "}
        <h1>Browse requests</h1>
        <input></input>
        <br></br>
        <button>Search requests</button>
      </Box>
      
    </div>
  );
}

export default browseRequest;
