// Adding another middleware

const express = require("express");
const app = express();

const logger = require("./logger");
const authorize = require("./authorize");
const products = require("./products.json");

app.use([logger, authorize]);

app.get("/products", (req, res) => {
	res.status(200).json(products);
});

app.get("/items", (req, res) => {
	console.log("Printing from middleware: ", req.user);
	res.status(200).send("ITEMS");
});

app.get("/users", (req, res) => {
	res.status(200).send("USERS");
});

app.get("/", (req, res) => {
	res.status(200).send("HOME");
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000...");
});
