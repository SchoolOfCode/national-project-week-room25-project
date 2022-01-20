import { useState, useEffect } from "react";

import RequestPost from "../RequestPost";
import ResponseSection from "../ResponseSection";

function Request({ id, title, body, category, date, room, userId, currentUserId}) {
  //fetch data about the responses to this specific request (fetch from the db)
  //state to store the list of responses - done
  //useEffect to make the fetch request

  return (
    <div>
      <RequestPost
        title={title}
        body={body}
        category={category}
        date={date}
        room={room}
        userId={userId}
      />
      <ResponseSection id={id} currentUserId={currentUserId} />
    </div>
  );
}

export default Request;
