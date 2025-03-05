import mysql2 from "mysql2"

const db = mysql2.createConnection({
    user: 'root',
    password: 'C@rr0c0l0',
    database: 'clinica',
})

export default db;