// import "./App.css";
// import Box from "@material-ui/core/Box";
import CreateRequest from "../Components/CreateRequests";
import BrowseRequest from "../Components/BrowseRequests";
import Request from "../Components/Request";
import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [requestList, setRequestList] = useState([]);
  useEffect(() => {
    async function getData() {
      const result = await fetch("https://week-project.herokuapp.com/requests");
      const data = await result.json();
      console.log(data.Payload);
      setRequestList(data.Payload);
    }
    getData();
  }, []);
  return (
    <div className="myApp">
      <header className="App-header">CamperOverflow</header>

      <div class="topContainer">
        <div class="row">
          <div class="col" id="createRequest">
            <CreateRequest />
          </div>

          <div class="col" id="searchRequest">
            <BrowseRequest />
          </div>
        </div>
      </div>

      <div class="row">
        {requestList.map((request) => {
          return (
            <div class="col" id="displayedRequest">
              <Request
                key={request["request_id"]}
                title={request.title}
                body={request.body}
                category={request.category}
                date={request["request_date"]}
                room={request.room}
                userId={request["user_id"]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
