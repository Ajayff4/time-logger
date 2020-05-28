var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var app = express();
var jwt = require("jsonwebtoken");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'timelogger'
});

con.connect(function (err) {
    if (err) throw err;
})
console.log("Connected!");
app.set('port', process.env.PORT || 8080);
var port = process.env.PORT || 8080;
app.listen(port, function (req, res) {
    console.log("Listening at " + port);
});


/*
To test in postman,
localhost:8080/categories
*/


app.post("/signup", (req, res) => {
    let data = {
        username: req.body.username,
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password
    };
    let sql = "INSERT INTO users SET ?";
    con.query(sql, data, function (err, resp) {
        if (err) {
            console.error("query error in signup");
        } else {
            console.log("signup successful");
            res.send(JSON.stringify(res[0]));
        }
    })
});

app.post("/login", (req, res) => {
    // eslint-disable-next-line no-useless-concat
    let sql = "SELECT * FROM users WHERE username=" + "'" + req.body.username + "'" + " AND password=" + "'" + req.body.password + "'";
    con.query(sql, function (err, resp) {
        if (err) {
            console.error("query error in login");
        } else {
            if (resp.length > 0) {
                // let user = {
                //     username: resp[0].username,
                //     fullname: resp[0].fullname,
                //     email: resp[0].email
                // };

                // let secrectkey = 'keyboard-cat';

                // jwt.sign({ user }, secrectkey, { expiresIn: '30s' }, (err, token) => {
                //     if (err) {
                //         console.log("Error in token generation: ", err);
                //     } else {
                //         res.json({
                //             token
                //         });
                //         resp[0].token = token;
                //     }
                // });

                console.log("login successful.", resp[0].username);
                res.send(JSON.stringify(resp[0]));
            } else {
                res.send(JSON.stringify({}));
            }
        }
    })
});

app.post("/signup", (req, res) => {
    let data = {
        username: req.body.username,
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password
    };
    let sql = "INSERT INTO users SET ?";
    con.query(sql, data, function (err, resp) {
        if (err) {
            console.error("query error in signup");
        } else {
            console.log("signup successful");
            res.send(JSON.stringify(res[0]));
        }
    })
});

app.post("/categories", (req, res) => {
    // eslint-disable-next-line no-useless-concat
    let sql = "SELECT * FROM categories";
    con.query(sql, function (err, resp) {
        if (err) {
            console.error("query error in profile");
        } else {
            if (resp.length > 0) {
                console.log("profile data fetched.", resp);
                res.send(JSON.stringify(resp));
            } else {
                res.send(JSON.stringify({}));
            }
        }
    })
});

app.get("/tags", (req, res) => {
    // eslint-disable-next-line no-useless-concat
    let sql = "SELECT tag FROM tags";
    con.query(sql, function (err, resp) {
        if (err) {
            console.error("query error in profile");
        } else {
            if (resp.length > 0) {
                //console.log("tag data fetched.", resp);
                res.send(JSON.stringify(resp));
            } else {
                res.send(JSON.stringify({}));
            }
        }
    })
});

app.get('/logs', (req, res) => {
    let sql = "SELECT id, logs.tag, category_fk, date_time, duration, log_details FROM logs, tags WHERE logs.tag=tags.tag";
    con.query(sql, function (err, resp) {
        if (err) {
            console.log(err);
        } else {
            console.log(resp);
            res.send(JSON.stringify(resp));
        }
    })
})

app.post("/add-tag", (req, res) => {
    let data = {
        tag: req.body.tag,
        category_fk: req.body.category
    };
    console.log(data);
    let sql = "INSERT INTO tags SET ?";
    con.query(sql, data, function (err, resp) {
        if (err) {
            console.error("query error in tag insertion");
        } else {
            console.log("tag added successfully");
            res.send(JSON.stringify(res[0]));
        }
    })
});

app.post("/add-category", (req, res) => {
    let data = {
        category: req.body.category
    };
    console.log(data);
    let sql = "INSERT INTO categories SET ?";
    con.query(sql, data, function (err, resp) {
        if (err) {
            console.error("query error in tag insertion");
        } else {
            console.log("tag added successfully");
            res.send(JSON.stringify(res[0]));
        }
    })
});

app.post("/add-log", (req, res) => {
    console.log("inside add-log");
    var data = {
        id: null,
        tag: req.body.tag,
        date_time: new Date(),
        duration: req.body.duration,
        log_details: req.body.log_details
    };

    let sql = "INSERT INTO logs SET ?";

    con.query(sql, data, function (err, resp) {
        if (err) {
            console.log("Error in add log");
            return parallel_done(err);
        } else {
            console.log("adding log");
            res.send(JSON.stringify(resp[0]));
        }
    });
});

app.post("/first-log", (req, res) => {
    console.log("inside first-log");
    let data = {
        id: null,
        tag: "first-log",
        date_time: new Date(),
        duration: 0,
        log_details: "Starting logging the day"
    };
    console.log(data);
    let sql_insert_log = "INSERT INTO logs SET ?";
    con.query(sql_insert_log, data, function (err, resp) {
        if (err) {
            console.error("query error in inserting 1st log");
        } else {
            console.log("first log added successfully");
            res.send(JSON.stringify(res[0]));
        }
    })
});

app.post('/hello', (req, res) => {
    res.json = {
        message: 'Working test'
    }
    res.sendStatus(200)
})