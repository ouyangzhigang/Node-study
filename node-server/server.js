'use strict';
let server = {
	http: require('http'),
	hostName: '127.0.0.1',
	port: '3000',
	runServer: require('http').createServer((req, res) => {
		res.statusCode = 200;
  		res.setHeader('Content-Type', 'text/plain');
  		res.end('Hello World\n');
	})
}

server.runServer.listen(server.port, server.hostName, () => {
	console.log(`Server running at http://${server.hostName}:${server.port}/`);
})

