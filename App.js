// FRONT-END

// postgres://dcsngsll:9XcBthf7g_L0CFW--KFMBZLG_3yX6nWM@tyke.db.elephantsql.com/dcsngsll

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const { Pool } = require("pg");

const pool = new Pool({
    user: "iqggrpim",
    host: "dumbo.db.elephantsql.com",
    database: "iqggrpim",
    password: "vg6buKPLOxnpxhp9h1T4dB1ZRQ3tRTmk",
    port: 5432
});

app.get("/", (req, res) => {
    pool
        .query("SELECT * FROM users;")
        .then((result) => res.json(result.rows))
        .catch((e) => console.error(e.stack));;
});

app.get("/:id", (req, res) => {
    pool
        .query(`SELECT * FROM users WHERE id=$1`, [req.params.id])
        .then((result) => res.json(result.rows))
        .catch((e) => console.error(e.stack));;
});

app.post("/", (req, res) => {
    console.log(req.body);
    pool
        .query("INSERT INTO users (first_name, last_name, age) values ($1, $2, $3);", [
            req.body.first_name,
            req.body.last_name,
            req.body.age
        ])
        .then((result) => res.send(result))
        .catch((e) => console.error(e.stack));;
});

app.put("/:id", (req, res) => {
    pool
        .query("update users set first_name=$1 where id=$2;", ["Bobbbbbby", 1]) // <- we could inject the content from a form (req.body)
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
});

    app.delete("/:idToRemove", (req, res) => {
        pool
            .query("delete FROM users where id=$1", [req.params.idToRemove])
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
});

app.get("/orders", (req, res) => {
    pool
        .query("SELECT * FROM orders;")
        .then((result) => res.json(result.rows))
        .catch((e) => console.error(err));;
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
