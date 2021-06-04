// Add Middleware in a different file
// Remove manual adding of middleware in each route

const express = require("express");
const app = express();

const logger = require("./logger");

app.use(logger);

// You can also add a path to app.use for ex:
// app.use("/api", logger); -> this middleware will only work for path /api

app.get("/", (req, res) => {
	res.status(200).send("Home");
});

app.get("/about", (req, res) => {
	res.send("About");
});

app.get("/items", (req, res) => {
	res.send("Items");
});

app.get("/users", (req, res) => {
	res.send("Users");
});

app.listen(5000, () => {
	console.log("Server is running on port 5000...");
});
