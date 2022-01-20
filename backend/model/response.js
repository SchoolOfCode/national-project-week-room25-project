import query from "../db/index.js";

export async function getAllResponse() {
  const sqlString = `SELECT * FROM response`;
  const res = await query(sqlString);
  return res;
}

export async function createResponse(response) {

  const userID = response.user_id;
  const requestID = response.request_id;
  const body = response.body;
  const responseDate = response.response_date;
  const voteCount = response.vote_count;
  const sqlString = `INSERT INTO response (user_id, request_id, body, response_date,  vote_count)
  VALUES ('${userID}', '${requestID}', '${body}', '${responseDate}', '${voteCount}');`;
  const res = await query(sqlString);
  return res;
}

export async function getResponseById(id) {
  const sqlString = `SELECT * FROM response WHERE request_id=${id}`;
  const res = await query(sqlString);
  return res;
}
