// This is gonna be same as app-02 but insted of linking the index.html file,
// we can simple add that file in the static folder itself.
// and express will server that file

const express = require("express");
const app = express();

app.use(express.static("./public"));

app.all("*", (req, res) => {
	res.status(404).send("Resource not found!");
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000...");
});
