import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import keycloakAdminClient from "../config/keycloak-config";
import { ErrorMessages } from "../utils/response-messages";

export const deleteUserById = async (
	request: Request,
	response: Response,
	id: string
): Promise<Response> => {
	if (!keycloakAdminClient.accessToken) {
		return response.status(StatusCodes.BAD_REQUEST).json({
			message: ErrorMessages.NOT_AUTHORIZED_USER,
		});
	}

	if (id.length != 36)
		return response.status(StatusCodes.BAD_REQUEST).json({
			message: id + ErrorMessages.NOT_ALLOWED_PATTERN,
		});

	const foundUser = await keycloakAdminClient.users.findOne({ id });
	if (foundUser == null)
		return response.status(StatusCodes.NOT_FOUND).json({
			message: ErrorMessages.NO_RECORDS_FOUND,
		});

	try {
		await keycloakAdminClient.users.del({ id });
		return response.status(StatusCodes.OK).json({
			body: foundUser,
		});
	} catch (error) {
		return response.status(StatusCodes.NOT_FOUND).json({
			message: error,
		});
	}
};
