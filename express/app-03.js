// Create API and return JSON data

const express = require("express");
const app = express();

app.get("/", (req, res) => {
	const users = [
		{
			name: "Dhiman Das",
		},
		{
			name: "Nabanita Das",
		},
	];

	res.json(users);
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000...");
});
