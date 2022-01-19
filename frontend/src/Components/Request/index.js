import RequestPost from "../RequestPost";

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
    </div>
  );
}

export default Request;
