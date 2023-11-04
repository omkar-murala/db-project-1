const mysql=require("mysql2")
const dB=mysql.createPool({
    host: 'localhost',
    user: 'admin',
    database: 'test',
    password:"123456789"
})

module.exports=dB