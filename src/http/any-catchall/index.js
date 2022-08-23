const https = require('https');
let arc = require('@architect/functions')
let parseBody = arc.http.helpers.bodyParser
const fetch=require("node-fetch");
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

exports.handler = async function resp(req) {
 if (req.rawPath=='/'){

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 404,
    body: 'append dest url after path'
  }}

  else{
    console.log(req.headers)
 url='http'+req.headers['referer']
 // url=url.substring(url.length - 1)
  
  
                            return {
    headers:{ 'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
},
    statusCode:200,
    body: url
  }
   
  }
  
  
  
  
  
  
}


