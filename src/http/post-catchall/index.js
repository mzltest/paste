let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function create(req) {
  let text = arc.http.helpers.bodyParser(req)
  todo.created = Date.now()
  res=await data.set({
    table: 'texts',
    ...text
  })
  return {
    statusCode: 302,
    headers: {
      location: '/'+res.key,
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
