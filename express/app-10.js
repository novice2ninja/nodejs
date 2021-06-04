// Using 'Router' class from express

const express = require("express");
const app = express();

const products = require("./products");

app.use("/products", products);

app.get("/", (req, res) => {
	res.status(200).send("Home");
});

app.listen(5000, () => {
	console.log("Server is listening on 5000...");
});
