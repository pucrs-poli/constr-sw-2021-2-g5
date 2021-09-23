import { Router } from "express";
import { StatusCodes } from "http-status-codes"
import { authorizeUser } from './services/authorizeUser';
import { getAllUsers } from './services/getAllUsers';

const router = Router()

// Auth user

router.post('/users/auth', (request, response) => {
    return authorizeUser(request, response)
})

// Create an user

router.post('/users', (request, response) => {
    return response.status(StatusCodes.CREATED).send("Created a user.")
})

// Return data from all users

router.get('/users', (request, response) => {
    return getAllUsers(request, response)
})

// Return data from a specific user

router.get('/users/:id', (request, response) => {
    return response.status(StatusCodes.OK).send("Returning data from a specific user.")
})

// Update a specific user

router.put('/users/:id', (request, response) => {
    return response.status(StatusCodes.ACCEPTED).send("Updated a specific user.")
})

// Update user password

router.patch('/users/:id', (request, response) => {
    return response.status(StatusCodes.ACCEPTED).send("Password's been updated.")
})

// Delete an user

router.delete('/users/:id', (request, response) => {
    return response.status(StatusCodes.OK).send("User's been deleted.")
})

export { router }