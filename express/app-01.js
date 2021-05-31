// Express basic examples

const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.status(200).send("Home page");
});

app.get("/about", (req, res) => {
	res.status(200).send("This is about page");
});

// For all methods like - get, post, put etc
app.all("*", (req, res) => {
	res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(5000, () => {
	console.log("server is listening on port 5000...");
});
