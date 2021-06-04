const express = require("express");
const router = express.Router();
// const products = require("./products.json");

router.get("/", (req, res) => {
	//res.status(200).json(products);
	res.send("This is from router class");
});

module.exports = router;
