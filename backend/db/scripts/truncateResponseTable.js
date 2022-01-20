import query from "../index.js"


async function truncateResponseTable(){
    const sqlString = `TRUNCATE TABLE response;`;
    const res = await query(sqlString)
    console.log("Table truncated", res)
}

truncateResponseTable();