import react from "react";
import Box from "@material-ui/core/Box";

function unsolvedRequest() {
  return (
    <div>
      <Box
        style={{ marginLeft: "40%", marginTop: "60px", width: "30%" }}
        color="red"
        bgcolor="palevioletred"
        p={1}
      >
        {" "}
        <h3>room#</h3>
        <h1>The Problem</h1>
        <p>This is a problem explained</p>
        <h3>tags</h3>
        <br></br>
        <button>expand problem</button>
      </Box>
    </div>
  );
}

export default unsolvedRequest;
