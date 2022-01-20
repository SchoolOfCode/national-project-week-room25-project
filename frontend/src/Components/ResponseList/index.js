import Response from "../Response";

function ResponseList({ responsesList }) {
  return (
    <div>
      {responsesList.map((response) => {
        return <Response key={response.response_id} response={response} />;
      })}
    </div>
  );
}

export default ResponseList;
