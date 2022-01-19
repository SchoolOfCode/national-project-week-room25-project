import query from "../db/index.js";


export async function getAllResponse(){
  const sqlString = `SELECT * FROM response`
  const res = await query(sqlString)
  return res
}

export async function createResponse(item){
  const sqlString = `INSERT INTO response () VALUES `
  const res =  await query(sqlString)
  return res
}

export async function getResponseById(id) {
  const sqlString = `SELECT * FROM response WHERE response_id=${id}`;
  const res = await query(sqlString);
  return res;
}
