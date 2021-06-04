const authorize = (req, res, next) => {
	if (req.query) {
		const user = req.query.user;
		if (user && user == "dhiman.das") {
			console.log("User is authorized");
			req.user = { username: "dhiman.das" };
			next();
		} else {
			res.status(401).send("User is not authorized");
			next();
		}
	} else {
		res.status(401).send("Unauthorized. User not found in the query params");
		next();
	}
};

module.exports = authorize;
