import query from "../db/index.js";

export async function creatRequest(request){
    const sqlString = "INSERT INTO requests ()"
    const res = await query(sqlString);
    return res
}

export async function getRequests(){
    const sqlString = "SELECT * FROM requests;";
    const res = await query(sqlString)
    return res

}

export async function getRequestById(id){
    const sqlString = `SELECT * FROM requests WHERE request_id=${id}`
    const res = await query(sqlString)
    return res
}