import query from "../index.js";

const data = [{"user_id": 1, title: "I cant push to github", category: "github", room: 12, body: "Help github wont authenticate....", "request_date": "18/1/2022"},
{"user_id": 2, title: "React components dont render", category: "react", room: 12, body: "Help....", "request_date": "18/1/2022"},
{"user_id": 3, title: "Heroku error", category: "heroku", room: 12, body: "Help....", "request_date": "18/1/2022"}]

async function populateRequestsTable() {
    for (let i=0; i<data.length; i++) {
        const sqlString = `INSERT INTO requests (user_id, title, category, room, body, request_date) 
            VALUES ('${data[i]["user_id"]}', '${data[i].title}', '${data[i].category}', '${data[i].room}', '${data[i].body}', '${data[i]["request_date"]}') RETURNING *;`
    
        const res = await query(sqlString);
        console.log("Request added", res)
    }
}

populateRequestsTable();