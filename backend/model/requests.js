import query from "../db";

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