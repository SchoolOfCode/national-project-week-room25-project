// import "./App.css";
// import Box from "@material-ui/core/Box";
import CreateRequest from "../Components/CreateRequests";
import BrowseRequest from "../Components/BrowseRequests";
import ExpandedRequest from "../Components/ExpandedRequests";
import SolvedRequest from "../Components/SolvedRequests";
import UnsolvedRequest from "../Components/UnsolvedRequests";
import { useEffect, useState } from "react";

function App() {
  const [requestList, setRequestList] = useState();
  useEffect(() => {
    async function getData() {
      const result = await fetch("https://week-project.herokuapp.com/requests");
      const data = await result.json();
      setRequestList(data);
      console.log(data);
    }
    getData();
  }, []);
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
