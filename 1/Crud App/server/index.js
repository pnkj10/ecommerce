const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "Pankaj",
  host: "localhost",
  password: "Root@123",
  database: "test",
});


app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get("/getdata",function(req,resp){
    const g="select * from customer";

    db.query(g,(err,result)=>{
        resp.send(result);
    });

});

// app.get("/",(req,resp)=>{
//     const p= "insert into customer(cid,cname,address) values (109,'Chinmay','Canada')";
    
//     db.query(p,(err,result)=>{
//     console.log(result)
//     resp.send("P A N K A J");
//     });
// });

app.listen(3000);
console.log("Server started at 3000");
// app.post("/create", (req, res) => {
//   const pid = req.body.pid;
//   const pname = req.body.pname;
//   const ploc = req.body.ploc;
//   const price = req.body.price;
  

//   db.query(
//     "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
//     [name, age, country, position, wage],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Values Inserted");
//       }
//     }
//   );
// });

// app.get("/employees", (req, res) => {
//   db.query("SELECT * FROM employees", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.listen(3001, () => {
//   console.log("Yey, your server is running on port 3001");
// });