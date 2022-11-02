const data = require('@begin/data')

exports.handler = async function read(req) {

    bodytext=`
   no such key :(
`

  
  
  try{
  ans = await data.get({
    table: 'texts',
    key:req.rawPath.substring(1)
  })
 // console.log()
      if(ans.redir){
          
           return {
    statusCode: 302,
    headers: {
      'Location': ans.redir,
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
      }
   return {
    statusCode: 200,
    headers: {
      'content-type': 'text/plain; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: ans.text
  }
  }
catch(e){console.log(e)
         return {
    statusCode: 404,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }, body: bodytext
  }}
 
 
}
