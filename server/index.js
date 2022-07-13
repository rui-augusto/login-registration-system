const express = require("express");
const app = express();
const port = 3001;

const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "login_register_system"
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    
    let SQL = "INSERT INTO users (name, email, password) VALUES ( ?, ?, ? )";

    db.query(SQL, [name, email, password], (err) => {
        console.log(err);
    })
});

app.get("/getUsers", (req, res) => {
    let SQL = "SELECT * FROM users";
    db.query(SQL, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(port, () => {
    console.log("rodando servidor na porta " + port);
});