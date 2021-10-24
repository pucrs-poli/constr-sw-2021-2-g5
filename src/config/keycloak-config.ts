import KcAdminClient from "@keycloak/keycloak-admin-client";
import dotenv from "dotenv";

dotenv.config();

const keycloakAdminClient = new KcAdminClient({
    baseUrl: "http://54.211.18.165:8080/auth",
	realmName: "master",
});

export default keycloakAdminClient;
