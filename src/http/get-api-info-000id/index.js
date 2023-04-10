const fs = require('fs');
const ytdl = require('ytdl-core');

exports.handler = async function http (request) {

    if ('pathParameters' in request&& 'id' in request.pathParameters && request.pathParameters.id!=null ){
        id=request.pathParameters.id    }
    else{
        return {statusCode:400,json:{'error':'no videoid'}}
    }

     info=ytdl.getInfo(id)
    
     return {"formats":info.formats,"related_videos":info.related_videos}
}
