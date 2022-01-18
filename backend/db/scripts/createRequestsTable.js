import query from "../index.js";

async function createRequestsTable() {
    const sqlString = `CREATE TABLE IF NOT EXISTS requests (request_id SERIAL PRIMARY KEY, user_id INT REFERENCES users(user_id), title TEXT NOT NULL, 
        category TEXT NOT NULL, room INT, body TEXT NOT NULL, request_date TEXT NOT NULL);`

    const res = await query(sqlString);
    console.log("User table created", res)
}

createRequestsTable();