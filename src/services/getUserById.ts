import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import keycloakAdminClient from "../config/keycloak-config";
import { ErrorMessages } from "../utils/response-messages";

export const getUserById = async (
    request: Request,
    response: Response,
    id
): Promise<Response> => {
    try {
        if (!keycloakAdminClient.accessToken) {
            return response.status(StatusCodes.BAD_REQUEST).json({
                message: ErrorMessages.NOT_AUTHORIZED_USER,
            });
        }

        const res = await keycloakAdminClient.users.findOne({ id: id });

        return response.status(StatusCodes.OK).json(res);
    } catch (err) {
        return response.status(StatusCodes.NOT_FOUND).json({
            message: ErrorMessages.NO_RECORDS_FOUND,
        });
    }
};
