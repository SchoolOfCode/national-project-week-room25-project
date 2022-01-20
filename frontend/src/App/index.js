// import "./App.css";
// import Box from "@material-ui/core/Box";
import CreateRequest from "../Components/CreateRequests";
import BrowseRequest from "../Components/BrowseRequests";
import Request from "../Components/Request";
import { useEffect, useState } from "react";
import {Routes, Route, Link, Outlet} from "react-router-dom";

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

    <div className="container-fluid">
    <div className="myApp" >




      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand" href="#">BOOTCAMPER-OVERFLOW</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/request">Request</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/createrequest">Create request</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/browserequest">Find request</a>
      </li>    
    </ul>
  </div>  
</nav>
<Routes> 
      <Route path="/" element={<h2></h2>}/>
      <Route path="/request" element={<Request />} />
      <Route path="/createrequest" element={<CreateRequest  />}/>
      <Route path="/browserequest" element={<BrowseRequest />} />
      </Routes>

{requestList.map((request) => {
        return (
          <Request
            key={request["request_id"]}
            title={request.title}
            body={request.body}
            category={request.category}
            date={request["request_date"]}
            room={request.room}
            userId={request["user_id"]}
          />
        );
      })}
    </div>
    </div>
  );
}

export default App;
