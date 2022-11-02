let arc = require('@architect/functions')
let data = require('@begin/data')

function ranstr(length) {
   var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
   var charLength = chars.length;
   var result = '';
   for ( var i = 0; i < length; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
   }
   return result;
}
exports.handler = async function create(req) {
  let btext = arc.http.helpers.bodyParser(req)
  res=await data.set({
    table: 'texts',
    key: ranstr(4),
    ttl: (Date.now() / 1000) + (60 * 60 * 24),
    ...btext
  })
  return {
    statusCode: 200,
    headers: {
      
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
     body:res.key
  }
}
