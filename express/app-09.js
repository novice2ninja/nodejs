// Implementing POST method

const express = require("express");
const app = express();

// static assets
app.use(express.static("./external-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
	console.log(req.body);
	const { name } = req.body;

	if (name) {
		res.status(200).send(`Welcome ${name}`);
	} else {
		res.status(401).send("Please provide a name");
	}
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000...");
});
