import Box from "@material-ui/core/Box";

function RequestPost({ title, date, room, body, category }) {
  return (
    <div>
      <Box
        style={{ marginLeft: "40%", marginTop: "60px", width: "30%" }}
        color="red"
        bgcolor="palevioletred"
        p={1}
      >
        {" "}
        <h2>
          {room}: {title}
        </h2>
        <p>{category} </p>
        <p>{date}</p>
        <p>{body}</p>
        <br></br>
        <button>expand problem</button>
      </Box>
    </div>
  );
}

export default RequestPost;
