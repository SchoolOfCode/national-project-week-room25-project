function RequestPost({ title, date, room, body, category }) {
  return (
    <div>
      <h2>
        {room}: {title}
      </h2>
      <p>{category} </p>
      <p>{date}</p>
      <p>{body}</p>
      <br></br>
    </div>
  );
}

export default RequestPost;
