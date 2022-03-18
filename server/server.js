const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const apiSlideshow = require('./slideshow/slideshow');
const goodsInfo = require('./database/goods-info-read');
const contentsList = require('./database/content-list-read')
const contentsInfo = require('./database/contents-info-read')
const searchList = require('./database/search-list-read')

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/slideshow', apiSlideshow);
app.use('/contents', contentsList);
app.use('/contents', contentsInfo);
app.use('/info', goodsInfo);
app.use('/search', searchList);


app.listen(port,()=>console.log(`Listening on port ${port}`));