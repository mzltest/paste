const data = require('@begin/data')

exports.handler = async function read(req) {

    bodytext=`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>Todos</title>
<body>
  <form action="/new" method="POST">
    <textarea name="text" rows="10" cols="30">...</textarea>
    <input type="submit" value="Submit">
    </form> 
    

</body>

</html>
`

  
  
  try{
  ans = await data.get({
    table: 'texts',
    key:'ZG6RDg5xiM'//req.rawPath.substring(1)
  })
  //console.log(ans)
   return {
    statusCode: 200,
    headers: {
      'content-type': 'text/plain; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: '1234567890'
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
