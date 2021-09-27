import { Request, Response } from "express";
import keycloakAdminClient from "../config/keycloak-config";
import { StatusCodes } from "http-status-codes";
import { ErrorMessages } from "../utils/response-messages";
import CredentialRepresentation from "@keycloak/keycloak-admin-client/lib/defs/credentialRepresentation";

export const resetUserPassword = async (
	request: Request,
	response: Response,
    id
): Promise<Response> => {
    
    let password = request.body.password;

	try {
		if (!keycloakAdminClient.accessToken) {
			return response.status(StatusCodes.BAD_REQUEST).json({
				message: ErrorMessages.NOT_AUTHORIZED_USER,
			});
		}

		await keycloakAdminClient.users.resetPassword({
            id: id,
            credential: {
            	temporary: false,
                type: 'password',
                value: password,
            },
        });

		return response.status(StatusCodes.OK).json("Password's been updated.");

	} catch (err) {
		return response.status(StatusCodes.BAD_REQUEST).json({
			message: err,
		});
	}
}; 
