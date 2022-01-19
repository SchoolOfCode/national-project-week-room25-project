import query from "../db/index.js";

export async function getUsers(){
    const sqlString =  `SELECT * FROM users`
    const res = await query(sqlString)
    return res
}

export async function getUserById(id){
    const sqlString = `SELECT * FROM users WHERE user_id = ${id}`
    const res = await query(sqlString)
    return res
}