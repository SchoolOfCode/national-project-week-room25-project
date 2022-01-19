// import "./App.css";
// import Box from "@material-ui/core/Box";
import CreateRequest from "../Components/CreateRequests";
import BrowseRequest from "../Components/BrowseRequests";
import Request from "../Components/Request";
import { useEffect, useState } from "react";

function App() {
  const [requestList, setRequestList] = useState([]);
  useEffect(() => {
    async function getData() {
      const result = await fetch("https://week-project.herokuapp.com/requests");
      const data = await result.json();
      console.log(data.Payload)
      setRequestList(data.Payload);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">Hello</header>
      <CreateRequest />
      <BrowseRequest />
      {requestList.map( (request) => {
        return <Request key={request["request_id"]} title={request.title} body={request.body} 
        category={request.category} date={request["request_date"]} room={request.room} userId={request["user_id"]} /> 
      })}
    </div>
  );
}

export default App;
