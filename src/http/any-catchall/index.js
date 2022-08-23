const fetch = require('node-fetch');
const https = require('https');
let arc = require('@architect/functions')
let parseBody = arc.http.helpers.bodyParser


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
  console.log(req.rawPath)
    url="https://google.com"
   cookies=req.cookies
   headers=req.headers
  // headers.host=url.split('/')[0] //set the correct host
   body=null?req.requestContext.http.method=='GET': parseBody(req)
console.log(cookies)
    console.log(headers)
const response = await fetch(url,{method:req.requestContext.http.method,headers:headers,body:body,agent: httpsAgent});
console.log(response.text())
    return {
    headers:response.headers.raw(),
    statusCode: response.status,
    body: response.text()
  }
  
  }
  
  
  
  
  
  
}


