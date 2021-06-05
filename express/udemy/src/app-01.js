// Usage of handlebars
// How to customize view directory

const path = require("path");
const express = require("express");
const app = express();

// Setting static assets
const staticAssetsPath = path.join(__dirname, "../public");
app.use(express.static(staticAssetsPath));

app.set("view engine", "hbs");
const customViewPath = path.join(__dirname, "../templates");
app.set("views", customViewPath);

app.get("/", (req, res) => {
	res.render("index", {
		title: "Dynamic Webpage Test",
	});
});

app.get("/about", (req, res) => {
	res.render("about", {
		title: "Dynamic webpage test",
	});
});

app.listen(3000, () => {
	console.log("Server is running on 3000...");
});
