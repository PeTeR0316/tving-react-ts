const request = require("request");
const express = require("express");
const router = express.Router();
const AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
const buckey_account = require('../account')
const s3 = new AWS.S3({
    accessKeyId: buckey_account.BUCKET_ACCOUNT.ACCESS_KEY_ID,
    secretAccessKey: buckey_account.BUCKET_ACCOUNT.SECRET_ACCESS_KEY,
});

let params = {
    Bucket: 'tving-react-ts',
}

// router.get('/dict',  (req, res) => {
//     let srcListArray = [];

//     res.send("test")
// });


s3.listObjects(params).on('success', function handlePage(response) {
    const regexForImgSrc = /^.*\//; //파일명만 가져오는 정규표현식

    //파일 이름만 불러오기
    for(let name in response.data.Contents) {
        console.log(response.data.Contents[name].Key.replace(regexForImgSrc,''));
    }

    //하위 폴더 리스트까지 전부 불러오기
    if(response.hasNextPage()) {
        response.nextPage().on('success', handlePage).send();
    }
}).send();

module.exports = router;