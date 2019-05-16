const path = require('path');
const cheerio = require('cheerio');
const util = require('util');
const request = util.promisify(require('request'));



/**
 * 输入一个 html页面的请求地址
 * 对 html 字符串 进行修改 删除广告的所有script连接
 * 返回 一个纯净的 html字符串
 * return
 * 
 */

function deleteScript(url) { 

}


module.exports