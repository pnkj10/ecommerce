const mysql=require("mysql2");

const conn =mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"91719",
    database:"crudmysql"
});

//connect
conn.connect((err)=>{
    if(err) throw err;
    console.log("DB connected");
});
module.exports =conn;