const https = require('https');
let arc = require('@architect/functions')
const fs = require('fs');
const ytdl = require('ytdl-core');
let parseBody = arc.http.helpers.bodyParser
/**
 * Convert a Readable Stream to base64 string
 * @param {ReadableStream} stream - a readable stream to convert in base64 string
 * @returns {Promise} - Promise that resolve in a string containing the base64
 */
const streamToBase64 = (stream) => {
  const concat = require('concat-stream')
  const { Base64Encode } = require('base64-stream')

  return new Promise((resolve, reject) => {
    const base64 = new Base64Encode()

    const cbConcat = (base64) => {
      resolve(base64)
    }

    stream
      .pipe(base64)
      .pipe(concat(cbConcat))
      .on('error', (error) => {
        reject(error)
      })
  })
}
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
  url=req.rawPath.substring(1)// otherwise /abcdddddd
   
   music=await ytdl(url,{quality: 'highestaudio'})
 
    music.on('end', () => {
streamToBase64(music).then(b64=>
                             console.log(b64)
                            return {
    headers:{'content-type': 'audio/m4a'},
    statusCode:200,
    body: b64
  }
                          )
      
 
  
});

   
  }
  
  
  
  
  
  
}


