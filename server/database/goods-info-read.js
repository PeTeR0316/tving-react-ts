const { query } = require("express");
const mysql = require("mysql");
const account = require('../account');
const router = require("../slideshow/slideshow");

const connection = mysql.createConnection({
    host: account.RDS_INFO.HOST,
    user: account.RDS_INFO.USER,
    password: account.RDS_INFO.PASSWORD,
    database: account.RDS_INFO.DATABASE

    // host: rds_info.GOORM_INFO.HOST,
    // user: rds_info.GOORM_INFO.USER,
    // password: rds_info.GOORM_INFO.PASSWORD,
    // database: rds_info.GOORM_INFO.DATABASE,
    // port: '58487',
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