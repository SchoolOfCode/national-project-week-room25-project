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
  const [currentUserId, setCurrentUserId] = useState(2);
  useEffect(() => {
    async function getData() {
      const result = await fetch("https://week-project.herokuapp.com/requests");
      const data = await result.json();
      console.log(data.Payload);
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
        console.log(json);
      }
      postRequest();
    }
  }, [submittedRequest])

  /*
  {
"user_id": 2,
"title": "new deployed! post",
"category": "github",
"room": 20,
"body": "Help github wont authenticate....",
"request_date": "18/1/2022"
}*/

  function handleRequestSubmit(request) {
    setSubmittedRequest(request)
  }

  return (
    <div className="myApp">
      <header className="App-header">CamperOverflow</header>

<<<<<<< HEAD
      <div class="topContainer">
        <div class="row">
          <div class="col" id="createRequest">
            <CreateRequest />
          </div>
=======
      <CreateRequest setSubmittedRequest={handleRequestSubmit} />
>>>>>>> 59417dafccbc034f4947f711295c1cd8b1e244f2

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
