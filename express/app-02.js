// Show HTML Page
const express = require("express");
const path = require("path");
const app = express();

// Link all static resources
app.use(express.static("./public"));

// Send the homepage
app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./app02/index.html"));
});

app.all("*", (req, res) => {
	res.status(404).send("No resource found!");
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000...");
});
