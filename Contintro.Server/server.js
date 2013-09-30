var settings = {
	port: 8080,
	ip: 'localhost',
	rootDir: '../ContinTro.Client'
};

var http = require('http'),
	path = require('path'),
	fs = require('fs');

http.createServer(function (request, response) {
	console.log("Request recieved for: " + request.url);
	route(request.url, response);
}).listen(settings.port, settings.ip);

function route(url, response) {
	filepath = (url === "/" || !url)
		? "/index.html"
		: url;

	fs.readFile(settings.rootDir + filepath, function(error, contents) {
		if(!error){
		    response.end(contents);
		} else {
			console.dir(error);
		    response.writeHead(200, {'Content-Type': 'text/html'});
		    response.end('<h1>There was an error!</h1>');
		}

	});
}

console.log('Server running at ' + settings.ip + ':' + settings.port);