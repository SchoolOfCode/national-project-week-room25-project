# Stackoverflow for Bootcampers

## Component Tree

- App
    - BrowseRequests
    - CreateRequests
    - Request
        - RequestPost
        - ResponseSection
            - ResponseList
                - Response
            - ResponseForm

## Components

---

### App

_state_

- fetched requests list

_behaviour_

- render a Request and CreateRequests form
- fetches all requests datat from the database

---

### BrowseRequests

_implement later_

### CreateRequests

_state_

- one for each form input's values

_props_

- function to send post request to API

_behavior_

- render form inputs for all the form data and a button to submit the form
- on clicking the submit button all the form data will be used to create a request post

### Request

_state_

- list of responses, fetched from API

_behaviour_

- render a RequestPost and ResponseSection
- pass request post data to RequestPost as props
- have a function that adds a Response to the list of responses in state, and pass this function to ResponseSection as props

---

### ResponsePost

_props_

- response post data

_behaviour_

- render everything for the post

---

### ResponseSection

_props_

- list of responses
- function to add a response

_behaviour_

- render a ResponseList and ResponseForm

---

### ResponseList

_props_

- list of responses
- function to add a response

_behaviour_

- render a Response for each each in the responses list

---

### ResponseForm

_state_

- response author's name
- response text

_props_

- function to add a response

_behaviour_

- send post request to API
- render an input for response author's name, an input/textarea for the response text, and a submit button
- on pressing the button, a response should be added to the list

---

### Response

_props_

- response dataa

_behaviour_

- render an author (p), response text (p)
