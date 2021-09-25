import { Request, Response } from "express";
import keycloakAdminClient from "../config/keycloak-config";
import { StatusCodes } from "http-status-codes";
import { ErrorMessages } from "../utils/response-messages";

export const createUser = async (
    request: Request,
    response: Response
): Promise<Response> => {
    let { username, email, firstName, lastName, emailVerified, enabled } =
        request.body;

    try {
        if (!keycloakAdminClient.accessToken) {
            return response.status(StatusCodes.BAD_REQUEST).json({
                message: ErrorMessages.NOT_AUTHORIZED_USER,
            });
        }

        const res = await keycloakAdminClient.users.create({
            username,
            email,
            firstName,
            lastName,
            emailVerified,
            enabled,
        });

        return response.status(StatusCodes.CREATED).json({
            id: res.id,
            body: request.body,
        });
    } catch (err) {
        return response.status(StatusCodes.BAD_REQUEST).json({
            message: err,
        });
    }
};
