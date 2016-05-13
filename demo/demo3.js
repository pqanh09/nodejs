var http = require('http');
var server = http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/html'});
  response.write('<b>My Serveraaa</b>');
  response.end();
});
server.listen(8071, 'localhost');
