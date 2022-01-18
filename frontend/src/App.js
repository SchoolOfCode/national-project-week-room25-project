// import "./App.css";
// import Box from "@material-ui/core/Box";
import browseRequest from "./Components/Browserequests";
import boxRequest from "./Components/Createrequest";
import exspandedRequest from "./Components/exspandedRequest";
import solvedRequest from "./Components/Solvedrequests";
import unsolvedRequest from "./Components/Unsolvedrequests";

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello</header>
      {boxRequest()}
      {browseRequest()}
      {unsolvedRequest()}
      {solvedRequest()}
      {exspandedRequest()}
    </div>
  );
}

export default App;
