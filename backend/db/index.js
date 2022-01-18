import pg from "pg"

const pool = new pg.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    ssl: {rejectUnauthorized: false}
})

export default function query(text, params){
    return pool.query(text, params)
}