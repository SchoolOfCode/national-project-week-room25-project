// import "./App.css";
// import Box from "@material-ui/core/Box";
import CreateRequest from "../Components/CreateRequests";
import BrowseRequest from "../Components/BrowseRequests";
import Request from "../Components/Request";
import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [requestList, setRequestList] = useState([]);
  const [submittedRequest, setSubmittedRequest] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(2); //change to implement authentication!

  useEffect(() => {
    async function getData() {
      const result = await fetch("https://week-project.herokuapp.com/requests");
      const data = await result.json();
      setRequestList(data.Payload);
    }
    getData();
  }, []);

  useEffect( () => {
    if (submittedRequest) {
      async function postRequest() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
        const result = await fetch("https://week-project.herokuapp.com/requests", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "user_id": currentUserId,
            title: submittedRequest.problemTitle,
            category: submittedRequest.category,
            room: submittedRequest.room,
            body: submittedRequest.help + ": " + submittedRequest.description,
            "request_date": date
          })
        })
        const json = await result.json();

        setRequestList([json.Payload[0], ...requestList, ]);

      }
      postRequest();
    }
  }, [submittedRequest])



  function handleRequestSubmit(request) {
    setSubmittedRequest(request)
  }

  return (
    <div className="myApp">
      <header className="App-header">CamperOverflow</header>

      <div className="topContainer">
        <div className="row">
          <div className="col" id="createRequest">
            <CreateRequest setSubmittedRequest={handleRequestSubmit}  />
          </div>

          <div className="col" id="searchRequest">
            <BrowseRequest />
          </div>
        </div>
      </div>

      <div className="row">
        {requestList.map((request) => {
          return (
            <div key={request["request_id"]} className="col" id="displayedRequest">
              <Request
                id={request["request_id"]}
                title={request.title}
                body={request.body}
                category={request.category}
                date={request["request_date"]}
                room={request.room}
                userId={request["user_id"]}
                currentUserId={currentUserId}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
