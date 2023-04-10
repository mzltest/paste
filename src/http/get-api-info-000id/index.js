const fs = require('fs');
const ytdl = require('ytdl-core');

exports.handler = async function http (request) {

    if ('pathParameters' in request&& 'id' in request.pathParameters && request.pathParameters.id!=null ){
        id=request.pathParameters.id    }
    else{
        return {statusCode:400,json:{'error':'no videoid'}}
    }

     info=ytdl.getInfo(id)
     info.response={}
     info.player_response={}
     return info
}
