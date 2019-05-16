const express = require ('express');
const app = new express ();
const PORT = 3001;
const path = require ('path');
const cheerio = require ('cheerio');
const util = require ('util');
const request = util.promisify (require ('request'));
const handleFunc = require ('./common');
const Base64 = require ('js-base64').Base64;
const fs = require ('fs');
//聚合数据的 <appKye></appKye>
const AppKey = 'cde2ee8f1501d047c2bf63162ceff23c';

//韩雪的接口
const AppKey2 = 'ad2a1c227d80c9bcb7027d695df4c90d';
const baseUrl = 'http://v.juhe.cn/toutiao/index';

/**
 * 设置跨域中间件
 */
app.use ((req, res, next) => {
  // res.header ('Access-Control-Allow-Origin', '*');
  next ();
});
app.get ('/', (req, res) => {
  res.sendFile (path.resolve (__dirname, '../index.html'));
});

// app.use(express.static('../static/'));
/**
 * 客户端请求图片资源的接口
 */
app.get ('/image/:imgName', (req, res) => {
  let imgName = req.params;
  res.sendFile (path.resolve (__dirname, '../src/images/', req.params.imgName));
});

/**
 * 客户端请求新闻整体页面的接口
 */
app.get ('/api/getData', async (req, res) => {
  let url = req.query.url;
  const data = await request (url);
  const htmlStr = data.body;
  const $ = cheerio.load (htmlStr);
  const scriptNodes = $ ('html').find ('script').remove ();

  res.send ($.html ());
});

/**
 * 客户端请求新闻列表页数据的接口
 * @param {type: string} 新闻类型
 */
app.get ('/api/getNewsItemData', async (req, res) => {
  const type = req.query.type;
  // let requestUrl = `${baseUrl}?type=${type}&key=${AppKey}`;
  // console.log('requestUrl', requestUrl);
  // let data = await request(requestUrl);
  // let backData = data.body;

  //请求本地数据 比秒接口数超限制
  let baseUrl = './data_';
  let url = `${baseUrl}${type}.json`;
  let backData = fs.readFileSync (url);
  res.json (JSON.parse (backData));
});

app.get ('/test', (req, res) => {
  console.log (req);
  let data = {
    name: 'dinghao',
    age: '25',
  };
  res.header ('Content-type', 'application/json');
  res.jsonp (data);
});

app.listen (PORT, (req, res) => {
  console.log (`server  is running  at  ${PORT}`);
});
