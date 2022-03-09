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

router.get('/mall',  (req, res) => {
    s3.listObjects(params).on('success', function handlePage(response) {
        let srcListArray = [];
        const regexForImgSrc = /^.*\//; //파일명만 가져오는 정규표현식
    
        //파일 이름만 불러오기
        for(let name in response.data.Contents) {
            //console.log(response.data.Contents[name].Key.replace(regexForImgSrc,''));
            srcListArray.push(response.data.Contents[name].Key.replace(regexForImgSrc,''));
        }
    
        //하위 폴더 리스트까지 전부 불러오기
        if(response.hasNextPage()) {
            response.nextPage().on('success', handlePage).send();
        }

        // console.log(srcListArray);
        res.send(srcListArray);
    }).send();
    

    // console.log("요청 ok!")
});

module.exports = router;