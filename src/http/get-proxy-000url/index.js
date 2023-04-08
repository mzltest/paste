const https = require('https');
const fetch = require('node-fetch');
const fs = require('fs');

const agent = new https.Agent({
  rejectUnauthorized: false
});

const downloadPartial = async (url, start, end) => {
    const headers = {
      Range: `bytes=${start}-${end}`
    };
  
    const response = await fetch(url, {
      headers,
      agent
    });
  
    const status = response.status;
    const contentRange =response.headers.get('content-range') || response.headers.get('Content-Range');
    const contentType = response.headers.get('content-type') || response.headers.get('Content-Type');
    const buffer = await response.buffer();
  
    return {
      status,
      contentRange,contentType,
      data: buffer.toString("base64")
    };
  };
  
exports.handler = async function proxy(request) {
    // 将所有头部信息转换为小写
    if ('pathParameters' in request&& 'url' in request.pathParameters && request.pathParameters.url!=null ){
        url=request.pathParameters.url
    }
    else{
        return {statusCode:400,json:{'error':'no url provided'}}
    }
    if (request.headers.hasOwnProperty('range') || request.headers.hasOwnProperty('Range')) {
        // 处理Range请求
        // ...
        rangeHeader=request.headers.range || request.headers.Range
        var matches = rangeHeader.match(/bytes=(\d+)-(\d+)/);
        if (matches) {
           start = parseInt(matches[1]);
           end = parseInt(matches[2]);
          
          // 处理Range请求
          // ...
        }
        else{return {statusCode:400,json:{'error':'range parse err'}}}
      } else if(
        'queryStringParameters' in request&& 'range' in request.queryStringParameters && request.queryStringParameters.range!=null
      ){
        console.log(request.queryStringParameters.range)
        start=parseInt(request.queryStringParameters.range.split('-')[0])
        end=parseInt(request.queryStringParameters.range.split('-')[1])

      }else
      {start=0,end=1024*1024}
      if(end-start>1024*1024){
        return {statusCode:400,json:{'error':'range too large'}}
      }
      console.log("start:", start, "end:", end);
      res=await downloadPartial(url,start,end)
return{statusCode:res.status,headers:{'Content-Type':res.contentType,'Range':res.contentRange,'Accept-Ranges':'bytes'},isBase64Encoded:true,body:res.data}

}