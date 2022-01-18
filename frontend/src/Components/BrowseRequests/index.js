import react from "react";
import Box from "@material-ui/core/Box";

function browseRequest() {
  return (
    <div>
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
