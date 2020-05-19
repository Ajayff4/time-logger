var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var app = express();
var async = require("async");
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
    let data = { username: req.body.username, fullname: req.body.fullname, email: req.body.email, password: req.body.password };
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
                /****************************FIRST LOG LOGIC WILL COME HERE************************/
                //app.post("/check-first-log-exist", (req, res) => {
                //     console.log("inside check-first-log-exist");
                //     let sql_first_log_exist = "SELECT date_time FROM logs WHERE tag='first-log' ORDER BY id DESC LIMIT 1";
                //     con.query(sql_first_log_exist, function (err, resp) {
                //         if (err) {
                //             console.log("query error in check first log exist");
                //         } else {
                //             //if (req_date !== resp.data.date_time.toLocaleDateString()) 
                //             {

                //             }
                //         }
                //     })
                // })

                /****************************************************/
                console.log("login successful.", resp[0].username);
                res.send(JSON.stringify(resp[0]));
            } else {
                res.send(JSON.stringify({}));
            }
        }
    })
});

app.post("/signup", (req, res) => {
    let data = { username: req.body.username, fullname: req.body.fullname, email: req.body.email, password: req.body.password };
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

app.post("/add-tag", (req, res) => {
    let data = { tag: req.body.tag, category_fk: req.body.category };
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

app.post("/add-tag", (req, res) => {
    let data = { tag: req.body.tag, category_fk: req.body.category };
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

app.post("/first-log", (req, res) => {
    console.log("inside first-log");
    let data = {
        id: null,
        tag: "first-log",
        category: "official",
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

app.post("/add-log", (req, res) => {
    console.log("inside add-log");
    var returnData = {};
    var data = {
        id: null,
        tag: req.body.tag,
        category: "--",
        date_time: new Date(),
        duration: req.body.duration,
        log_details: req.body.log_details
    };

    let sql_get_category = "SELECT category_fk FROM `tags` WHERE tag=" + "'" + req.body.tag + "'";
    let sql_insert_log = "INSERT INTO logs SET ?";

    async.parallel([
        function (parallel_done) {
            con.query(sql_get_category, {}, function (err, resp) {
                if (err) {
                    return parallel_done(err);
                } else {
                    console.log("fetching category");
                    returnData.category = resp[0].category_fk;
                    data.category = resp[0].category_fk;
                    console.log("category: ", data.category);
                    parallel_done();
                }
            });
        },
        function (parallel_done) {
            con.query(sql_insert_log, data, function (err, resp) {
                if (err) {
                    return parallel_done(err);
                } else {
                    console.log("adding log");
                    returnData.data = resp[0];
                    res.send(JSON.stringify(resp[0]));
                    parallel_done();
                }

            });
        }
    ], function (err) {
        if (err) {
            console.log("Error: ", err);
            res.send(data);
        }
    });
    console.log("data: ", returnData.category);
});

app.get('/logs', (req, res) => {
    let sql = "SELECT * FROM logs";

    con.query(sql, function (err, resp) {
        if (err) {
            console.log(err);
        } else {
            console.log(resp);
            res.send(JSON.stringify(resp));
        }
    })
})