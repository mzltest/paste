@app
mboard

@http
get /api/search/:query
get /api/info/:id


@tables
data
  scopeID *String
  dataID **String
  ttl TTL

@aws
timeout 30