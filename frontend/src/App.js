// import logo from "./logo.svg";
// import "./App.css";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello</header>
      <Box
        style={{ marginLeft: "40%", marginTop: "60px", width: "30%" }}
        color="white"
        bgcolor="palevioletred"
        p={1}
      >
        Unsolved Requests
      </Box>

      <Box
        style={{ marginLeft: "40%", marginTop: "60px", width: "30%" }}
        color="red"
        bgcolor="palevioletred"
        p={1}
      >
        Main box
      </Box>

      <Box
        style={{ marginLeft: "40%", marginTop: "60px", width: "30%" }}
        color="blue"
        bgcolor="palevioletred"
        p={1}
      >
        Solved requests
      </Box>
    </div>
  );
}

export default App;
