let arc = require('@architect/functions')
var yt = require("youtube-search-without-api-key")
exports.handler = async function http (request) {

    if ('pathParameters' in request&& 'query' in request.pathParameters && request.pathParameters.query!=null ){
        query=request.pathParameters.query
    }
    else{
        return {statusCode:400,json:{'error':'no search query'}}
    }
    const videos = await yt.search(query);
    return videos
}