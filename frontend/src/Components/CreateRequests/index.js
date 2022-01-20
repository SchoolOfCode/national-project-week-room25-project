import { useState } from "react";
// import Box from "@material-ui/core/Box";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";

//create a submit box with post functionality
//We need to create a text input box
// seperate text box for room number
// text box for discription and what you have tried
// text box for tags
// text box for what assistance you require

// change h3 to labels
// make state to track inputs of the user
//

function CreateRequest({ setSubmittedRequest }) {

  const [userInput, setUserInput] = useState({
    category: "miscellaneous",
    help: "respond here",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  function handleOnChange(e) {
    //get the user's input
    //get which input element was activated
    //update the state for that input element
    const text = e.target.value;
    const element = e.target.id;
    setUserInput({ ...userInput, [element]: text });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedRequest(userInput);
  }

  function toggleFormVisibility() {
    setIsFormVisible(!isFormVisible);
}


  return (
    <div>
      <button className="btn btn-primary" onClick={toggleFormVisibility} >{isFormVisible ? "Hide Form" : "Make a Request"}</button>
      <form onSubmit={handleSubmit} style={isFormVisible ? {visibility: "visible", height: "auto"} : {visibility : "hidden", height: 0}}>
        <div className="form-group">
          <label htmlFor="room">Room Number</label>
          <input
          min="1"
          className="form-control"
            type="number"
            id="room"
            onChange={handleOnChange}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="problemTitle">Problem Title</label>
          <input
          className="form-control"
            type="text"
            id="problemTitle"
            onChange={handleOnChange}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select className="form-control" id="category" onChange={handleOnChange} required>
            <option value="" disabled selected hidden>Select...</option>
            <option defaultValue>miscellaneous</option>
            <option>react</option>
            <option>github</option>
            <option>JavaScript</option>
            <option>Deployment</option>
            <option>planning</option>
          </select>
          </div>
          <div className="form-group">
          <label htmlFor="description">
            Explain in more detail, Include what you have tried
          </label>
          <textarea
          className="form-control"
            type="text"
            id="description"
            onChange={handleOnChange}
            required
          ></textarea>      
          </div>
          <div className="form-group">
          <label htmlFor="help">What assistance do you require?</label>
          <select className="form-control" id="help" onChange={handleOnChange} required>
            <option value="" disabled selected hidden>Select...</option>
            <option defaultValue>Respond here please</option>
            <option>Come to room please</option>
          </select>
          </div>
        <br></br>
        <button type="submit" className="btn btn-success">Submit Request</button>
      </form>

    </div>
  );
}

export default CreateRequest;
