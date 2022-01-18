import pg from "pg"

const pool = new pg.Pool({
    user: config.user,
    host: config.host,
    database: config.database,
    password: config.password,
    port: config.port,
    ssl: { rejectUnauthorized: false }
})

export default function query(text, params){
    return pool.query(text, params)
}