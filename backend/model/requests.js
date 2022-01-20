import query from "../db/index.js";

export async function creatRequest(request) {
  const user_id = request.user_id;
  const title = request.title;
  const category = request.category;
  const room = request.room;
  const body = request.body;
  const request_date = request.request_date;

  const sqlString = `INSERT INTO requests (user_id, title, category, room, body, request_date) 
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`;
  const res = await query(sqlString, [user_id, title, category, room, body, request_date]);
  return res;
}

export async function getRequests() {
  const sqlString = "SELECT * FROM requests;";
  const res = await query(sqlString);
  return res;
}

export async function getRequestById(id) {
  const sqlString = `SELECT * FROM requests WHERE request_id=${id}`;
  const res = await query(sqlString);
  return res;
}

`CREATE TABLE IF NOT EXISTS requests (request_id SERIAL PRIMARY KEY, user_id INT REFERENCES users(user_id), title TEXT NOT NULL, 
        category TEXT NOT NULL, room INT, body TEXT NOT NULL, request_date TEXT NOT NULL);`;
