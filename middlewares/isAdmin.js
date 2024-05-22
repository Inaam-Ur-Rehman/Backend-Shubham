import asyncHandler from "express-async-handler";

//Check if user is Admin using token

export const isAdmin = asyncHandler(async (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401);
		throw new Error("Not authorized as an admin");
	}
});