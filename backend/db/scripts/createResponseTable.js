import query from "../index.js";

async function createResponseTable() {
  const sqlString = `CREATE TABLE IF NOT EXISTS requests (response_id SERIAL PRIMARY KEY, user_id INT REFERENCES users(user_id), request_id INT REFERENCES requests(request_id), body TEXT NOT NULL,
        response_date TEXT NOT NULL, vote_count INT);`;

  const res = await query(sqlString);
  console.log("Response table created", res);
}

createResponseTable();
