let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function create(req) {
  let btext = arc.http.helpers.bodyParser(req)
  res=await data.set({
    table: 'texts',
    text:btext
  })
  return {
    statusCode: 302,
    headers: {
      location: '/'+res.key,
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
