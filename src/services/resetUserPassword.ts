import { Request, Response } from "express";
import keycloakAdminClient from "../config/keycloak-config";
import { StatusCodes } from "http-status-codes";
import { ErrorMessages } from "../utils/response-messages";

export const resetUserPassword = async (
	request: Request,
	response: Response,
    id
): Promise<Response> => {
	let { password } = request.body;

	try {
		if (!keycloakAdminClient.accessToken) {
			return response.status(StatusCodes.BAD_REQUEST).json({
				message: ErrorMessages.NOT_AUTHORIZED_USER,
			});
		}

		const res = await keycloakAdminClient.users.resetPassword({
            id: id,
            credential: {
            	temporary: false,
                type: 'password',
                value: password,
            },
        });

		return response.status(StatusCodes.OK).json(res);
	} catch (err) {
		return response.status(StatusCodes.BAD_REQUEST).json({
			message: err,
		});
	}
};
