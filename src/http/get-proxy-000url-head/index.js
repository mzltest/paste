const https = require("https");

const agent = new https.Agent({
  rejectUnauthorized: false
})
let fetch = require('node-fetch')

async function headget(url) {
    try {
      const response = await fetch(url, {
        method: "HEAD",
        agent: agent,
      });
      const statusCode = response.status;
      const contentType = response.headers.get("content-type") || response.headers.get("Content-Type");
      const contentLength = response.headers.get("content-length");
      return {
        statusCode,
        contentType,
        contentLength
      };
    } catch (error) {
      console.error(error);
    }
  }

   
exports.handler = async function proxy(request) {
    // 将所有头部信息转换为小写
    if ('pathParameters' in request&& 'url' in request.pathParameters && request.pathParameters.url!=null ){
        url=request.pathParameters.url
    }
    else{
        return {statusCode:400,json:{'error':'no url provided'}}
    }
      res=await headget(url)
return{statusCode:res.statusCode,headers:{'dest-content-type':res.contentType,'dest-content-length':res.contentLength,'Content-Type':'application/json; charset=utf-8'},body:JSON.stringify(res)}

}