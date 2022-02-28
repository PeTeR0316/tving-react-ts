const AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
const s3 = new AWS.S3({
    accessKeyId: "AKIA33S22JYRZNGMBVYI",
    secretAccessKey: "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",
});

let params = {
    Bucket: 'tving-react-ts',
    Delimiter: '/',
    Prefix: 'mall/slideshow/'
}

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
