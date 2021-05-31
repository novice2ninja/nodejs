"use strict";

const http = require("http");

const server = http.createServer((request, response) => {
	const { method, url, headers } = request;

	if (method == "GET") {
		if (url.includes("/users")) {
			response.statusCode = 200;
			response.setHeader("Content-Type", "application/json");
			const body = [
				{
					name: "Dhiman Das",
					id: "0001",
				},
				{
					name: "Rohit Sarma",
					id: "0002",
				},
			];

			const responsToReturn = {
				headers,
				url,
				method,
				body,
			};

			response.write(JSON.stringify(responsToReturn));
			response.end();
		}

		response.statusCode = 404;
		response.setHeader("Content-Type", "application/json");
		response.write("Resource not found");
		response.end();
	}

	response.statusCode = 405;
	response.setHeader("Content-Type", "application/json");
	response.write("Method not supported");
	response.end();
});

server.listen(3000, (error) => {
	if (error) {
		console.log("Unable to run the server");
	}

	console.log("Server is running on localhost:3000");
});
