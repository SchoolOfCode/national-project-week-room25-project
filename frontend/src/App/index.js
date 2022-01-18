// import "./App.css";
// import Box from "@material-ui/core/Box";
import CreateRequest from "../Components/CreateRequests";
import BrowseRequest from "../Components/BrowseRequests";
import ExpandedRequest from "../Components/ExpandedRequests";
import SolvedRequest from "../Components/SolvedRequests";
import UnsolvedRequest from "../Components/UnsolvedRequests";

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello</header>
      <CreateRequest />
      <BrowseRequest />
      <UnsolvedRequest />
      <SolvedRequest />
      <ExpandedRequest />
    </div>
  );
}

export default App;
