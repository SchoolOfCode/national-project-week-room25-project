function Response({ response }) {
  return (
    <div>
      <p>{response.response_date}</p>
      <p>{response.vote_count}</p>
      <p>{response.body}</p>
    </div>
  );
}

export default Response;
