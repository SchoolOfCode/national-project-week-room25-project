import react from "react";
import Box from "@material-ui/core/Box";

function SolvedRequest() {
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
        <h3>tags</h3>
        <p>Problem explained</p>
        <p>Problem solution</p>
        <br></br>
        <button>expand solution</button>
      </Box>
    </div>
  );
}

export default SolvedRequest;
