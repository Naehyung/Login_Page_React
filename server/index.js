const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
      key: "userId",
      secret: "subscribe",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 60 * 60 * 24,
      },
    })
  );

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2173",
  database: "login_system",
});

app.post("/account/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    const sqlInsert = "INSERT INTO users (username, password) VALUES (?,?);";
    db.query(sqlInsert, [username, hash], (err, result) => {
      console.log(err);
    });
  });
});

app.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false, user: req.session.user });
    }
  });

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const sqlSELECT = "SELECT * FROM users where username = ?";
  db.query(sqlSELECT, username, (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
        } else {
          res.send({ message: "Wrong username/password combination" });
        }
      });
    } else {
      res.send({ message: "User doesn't exist" });
    }
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});