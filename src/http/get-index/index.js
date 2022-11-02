exports.handler = async function read(req) {

  bodytext=`
  <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<title>Max. ~10kb</title>
<body>
<form action="/new" method="POST">
  <textarea name="text" rows="10" cols="30"></textarea><hr>
 or url(will redirect) <input type="text" name="url">
  <input type="submit" value="Submit">
  </form> 
  
</body>
</html>
`




       return {
  statusCode: 200,
  headers: {
    'content-type': 'text/html; charset=utf8',
    'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
  }, body: bodytext
}}


