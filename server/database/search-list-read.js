const request = require("request");
const express = require("express");
const router = express.Router();
const AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
const account = require('../account');
const { query } = require("express");
const mysql = require("mysql");

const s3 = new AWS.S3({
    accessKeyId: account.BUCKET_ACCOUNT.ACCESS_KEY_ID,
    secretAccessKey: account.BUCKET_ACCOUNT.SECRET_ACCESS_KEY,
});

const connection = mysql.createConnection({
    host: account.RDS_INFO.HOST,
    user: account.RDS_INFO.USER,
    password: account.RDS_INFO.PASSWORD,
    database: account.RDS_INFO.DATABASE
});

connection.connect((err) => {
    if (err)  console.log(err); //접속 실패 시 에러를 throw
});

router.get('/:search', (req, res) => {
    const search = req.params.search; //입력한 검색어
    const selectSQL = `SELECT * FROM contents_information WHERE contents_name LIKE '%${search}%'`;

    connection.query(selectSQL, (err, rows, field) => {
        console.log(search);
        console.log(rows);
        res.send(rows);
    });
})


module.exports = router;