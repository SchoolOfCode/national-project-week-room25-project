import query from "../index.js";

async function createUsersTable() {
    const sqlString = `CREATE TABLE IF NOT EXISTS users (user_id SERIAL PRIMARY KEY, first_name TEXT NOT NULL, 
        last_name TEXT NOT NULL, email TEXT NOT NULL, role TEXT NOT NULL);`

    const res = await query(sqlString);
    console.log("User table created", res)
}

createUsersTable();