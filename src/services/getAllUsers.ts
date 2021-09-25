import { Request, Response } from "express";
import keycloakAdminClient from "../config/keycloak-config";
import { StatusCodes } from "http-status-codes";
import { ErrorMessages } from "../utils/response-messages";

export const getAllUsers = async (
	request: Request,
	response: Response
): Promise<Response> => {
	try {
		console.log(keycloakAdminClient.accessToken);

		if (!keycloakAdminClient.accessToken) {
			return response.status(StatusCodes.BAD_REQUEST).json({
				message: ErrorMessages.NOT_AUTHORIZED_USER,
			});
		}

		const user = await keycloakAdminClient.users.find();
		return response.status(StatusCodes.OK).send(user);
	} catch (err) {
		return response.status(StatusCodes.NOT_FOUND).json({
			message: err.message,
		});
	}
};
