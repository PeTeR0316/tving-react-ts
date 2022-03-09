const { query } = require("express");
const mysql = require("mysql");
const rds_info = require('../account');
const router = require("../slideshow/slideshow");

const connection = mysql.createConnection({
    host: rds_info.RDS_INFO.HOST,
    user: rds_info.RDS_INFO.USER,
    password: rds_info.RDS_INFO.PASSWORD,
    database: rds_info.RDS_INFO.DATABASE
});

connection.connect((err) => {
    if (err)  console.log(err); //접속 실패 시 에러를 throw
});

router.get('/goods', (req, res) => {
    connection.query("SELECT * FROM goods_information", (err, rows, field) => {
        res.send(rows);
    });
})


module.exports = router;