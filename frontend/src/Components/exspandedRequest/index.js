import react from "react";
import Box from "@material-ui/core/Box";

function exspandedRequest() {
  return (
    <div>
      <Box
        style={{ marginLeft: "40%", marginTop: "60px", width: "30%" }}
        color="red"
        bgcolor="palevioletred"
        p={1}
      >
        {" "}
        <h1>The problem</h1>
        <h3>room#</h3>
        <h3>tags</h3>
        <h3>discription of problem</h3>
        <h3>The problem response from coach/bootcamper</h3>
        <input></input>
        <br></br>
        <button>Submit response</button>
      </Box>
    </div>
  );
}

export default exspandedRequest;
