const data = require('@begin/data')

exports.handler = async function read(req) {

    bodytext=`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <meta name="theme-color" content="#132865">
  <meta name="msapplication-TileColor" content="#132865">
  <title>Todos</title>
<body>
  <form action="/new">
    <textarea name="text" rows="10" cols="30">
    The cat was playing in the garden.
    </textarea>
    <input type="submit" value="Submit">
    </form> 
    

</body>

</html>
`

  
  
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
    }, body: bodytext
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
