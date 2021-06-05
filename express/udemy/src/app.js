// Usages of hbs or handlebars to show dynamic content

const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "hbs");
const staticFilesPath = path.join(__dirname, "../public");
console.log(staticFilesPath);
app.use(express.static(staticFilesPath));

app.get("/", (req, res) => {
	const options = {
		title: "Weather App",
	};
	res.render("index", options);
});

app.get("/about", (req, res) => {
	const options = {
		title: "Weather App",
	};
	res.render("about", options);
});

app.listen(3000, () => {
	console.log("Server is running on port 3000...");
});
