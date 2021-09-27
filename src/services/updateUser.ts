import { Request, Response } from "express";
import keycloakAdminClient from "../config/keycloak-config";
import { StatusCodes } from "http-status-codes";
import { ErrorMessages } from "../utils/response-messages";

export const updateUser = async (
    request: Request,
    response: Response,
    id
): Promise<Response> => {
    let { username, email, firstName, lastName, emailVerified, enabled } =
		request.body;

    try {
        if (!keycloakAdminClient.accessToken) {
			return response.status(StatusCodes.BAD_REQUEST).json({
				message: ErrorMessages.NOT_AUTHORIZED_USER,
			});
		}

        const res = await keycloakAdminClient.users.update(
            {id: id},
            {username,
			email,
			firstName,
			lastName,
			emailVerified,
			enabled});

        return response.status(StatusCodes.OK).json("User updated",{id: res.id});
    } catch (err) {
		return response.status(StatusCodes.NOT_FOUND).json({
			message: ErrorMessages.NO_RECORDS_FOUND,
		});
    }
};