import query from "../db/index.js";

export async function getResponseById(id) {
  const sqlString = `SELECT * FROM response WHERE response_id=${id}`;
  const res = await query(sqlString);
  return res;
}
