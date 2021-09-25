import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { authorizeUser } from "./services/authorizeUser";
import { getAllUsers } from "./services/getAllUsers";
import { createUser } from "./services/createUser";
import { getUserById } from "./services/getUserById";

const router = Router();

// Auth user

router.post("/users/auth", (request, response) => {
	return authorizeUser(request, response);
});

// Create an user

router.post("/users", (request, response) => {
	return createUser(request, response);
});

// Return data from all users

router.get("/users", (request, response) => {
	return getAllUsers(request, response);
});

// Return data from a specific user

router.get("/users/:id", (request, response) => {
	return getUserById(request, response, request.params.id);
});

// Update a specific user

router.put("/users/:id", (request, response) => {
	return response
		.status(StatusCodes.ACCEPTED)
		.send("Updated a specific user.");
});

// Update user password

router.patch("/users/:id", (request, response) => {
	return response
		.status(StatusCodes.ACCEPTED)
		.send("Password's been updated.");
});

// Delete an user

router.delete("/users/:id", (request, response) => {
	return response.status(StatusCodes.OK).send("User's been deleted.");
});

export { router };
