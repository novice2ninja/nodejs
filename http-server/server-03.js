"use strict";

const http = require("http");

const server = http.createServer((request, response) => {
	const { url, method, headers } = request;
	console.log(request);
});

server.listen(3000, "myhost", 5);
