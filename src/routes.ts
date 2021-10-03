import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { authorizeUser } from "./services/authorizeUser";
import { getAllUsers } from "./services/getAllUsers";
import { createUser } from "./services/createUser";
import { getUserById } from "./services/getUserById";
import { deleteUserById } from "./services/deleteUserById";
import { resetUserPassword } from './services/resetUserPassword';

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
	return resetUserPassword(request, response, request.params.id)
});

// Delete an user

router.delete("/users/:id", (request, response) => {
	return deleteUserById(request, response, request.params.id);
});

export { router };
