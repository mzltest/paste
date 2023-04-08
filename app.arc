@app
mboard

@http
get /api/search/:query
get /api/info/:id
get /proxy/:url
get /proxy/:url/head


@tables
data
  scopeID *String
  dataID **String
  ttl TTL

@aws
timeout 30