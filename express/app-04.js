/**
 * Add route to get individual product
 */

const express = require("express");
const app = express();

const products = require("./products.json");

// Get all products
app.get("/products", (req, res) => {
	res.json(products);
});

// Get by query params
app.get("/products/search", (req, res) => {
	const { name, limit } = req.query;

	if (!name) {
		res.status(400).send("Invalid query paramerter. Only supported parameters are name and limit");
	}

	const queryResultsForProducts = products.filter((product) => product.name.includes(name));
	res.send(queryResultsForProducts.slice(0, limit));
});

// Get product by id
app.get("/products/:id", (req, res) => {
	const { id } = req.params;
	const product = products.find((product) => product.id == id);

	if (!product) {
		res.status(404).send("Product not found");
	}
	res.json(product);
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000...");
});
