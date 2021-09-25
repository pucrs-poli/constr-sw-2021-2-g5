import { StatusCodes } from "http-status-codes";
import keycloakAdminClient from "../config/keycloak-config";
import { Request, Response } from "express";
import { ErrorMessages } from "../utils/response-messages";

export const authorizeUser = async (
	request: Request,
	response: Response
): Promise<Response> => {
	let { username, password, grantType, clientId } = request.body;

	try {
		await keycloakAdminClient.auth({
			username,
			password,
			grantType,
			clientId,
		});
		return response.status(StatusCodes.OK).json({
			message: "User has been authorized.",
			accessToken: keycloakAdminClient.accessToken,
			refreshToken: keycloakAdminClient.refreshToken,
		});
	} catch (err) {
		return response.status(StatusCodes.BAD_REQUEST).json({
			message: err.message,
		});
	}
};
