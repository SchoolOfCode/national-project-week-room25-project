import RequestPost from "../RequestPost";
import ResponseSection from "../ResponseSection";

function Request({ title, body, category, date, room, userId }) {
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
      <ResponseSection />
    </div>
  );
}

export default Request;
