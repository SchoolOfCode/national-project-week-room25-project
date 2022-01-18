import react from "react";
import Box from "@material-ui/core/Box";
//create a submit box with post functionality
//We need to create a text input box
// seperate text box for room number
// text box for discription and what you have tried
// text box for tags
// text box for what assistance you require

function boxRequest() {
  return (
    <div>
      <Box
        style={{ marginLeft: "40%", marginTop: "60px", width: "30%" }}
        color="red"
        bgcolor="palevioletred"
        p={1}
      >
        {" "}
        <h1>create a request</h1>
        <h3>room#</h3>
        <input></input>
        <h3>what is your problem</h3>
        <input></input>
        <h3>tags</h3>
        <input></input>
        <h3>what assistance do you require?</h3>
        <input></input>
        <br></br>
        <button>Submit request</button>
      </Box>
    </div>
  );
}

export default boxRequest;
