const data = require('@begin/data')

exports.handler = async function read(req) {
  if (req.path=='/'){
  return {
    statusCode: 201,
    headers: {
      'content-type': 'text/plain; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: 'post /new'
  }
  }
  
  
  
  try{
  let ans = await data.get({
    table: 'todos',
    key:req.path.substring(1)
  })}
catch{ return {
    statusCode: 404,
    headers: {
      'content-type': 'text/plain; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }}
 
  return {
    statusCode: 201,
    headers: {
      'content-type': 'text/plain; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: ans.text
  }
}
