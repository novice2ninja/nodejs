// Using thrid party middleware 'morgan'

const express = require("express");
const app = express();

const morgan = require("morgan");

const products = require("./products.json");

app.use(morgan("tiny"));

app.get("/products", (req, res) => {
	res.status(200).json(products);
});

app.get("/items", (req, res) => {
	res.status(200).send("Items");
});

app.get("/users", (req, res) => {
	res.status(200).send("Users");
});

app.get("/", (req, res) => {
	res.status(200).send("Home");
});

app.listen(5000, () => {
	console.log("Server is running on port 5000...");
});
