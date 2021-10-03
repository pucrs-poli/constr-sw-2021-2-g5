import { Request, Response } from "express";
import keycloakAdminClient from "../config/keycloak-config";
import { StatusCodes } from "http-status-codes";
import { ErrorMessages } from "../utils/response-messages";
import UserRepresentation from "@keycloak/keycloak-admin-client/lib/defs/userRepresentation";

export const updateUser = async (
    request: Request,
    response: Response,
    id
): Promise<Response> => {
    let { username, email, firstName, lastName, emailVerified, enabled } =
        request.body;

    let teste:UserRepresentation

    try {
        if (!keycloakAdminClient.accessToken) {
            return response.status(StatusCodes.BAD_REQUEST).json({
                message: ErrorMessages.NOT_AUTHORIZED_USER,
            });
        }

        console.log("Username: " + username)

        await keycloakAdminClient.users.update(
            { id: id },
            {
                username,
                email,
                firstName,
                lastName,
                emailVerified,
                enabled
            });

        return response.status(StatusCodes.OK).json({
            message: "User has been updated",
            id: id
        });

    } catch (err) {
        return response.status(StatusCodes.NOT_FOUND).json({
            message: ErrorMessages.NO_RECORDS_FOUND,
        });
    }
};