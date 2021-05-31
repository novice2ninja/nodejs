// How do you create a simple server in Node.js that returns Hello World?
"use strict";

const http = require("http");

const PORT = 3000;

const server = http.createServer();
server.listen(PORT, (error) => {
	if (error) {
		console.log("error occured");
	}

	console.log("Server has started and up and running...");
});

server.on("request", (request, response) => {
	console.log("I don't know what to show");
});
