import KcAdminClient from '@keycloak/keycloak-admin-client'
import dotenv from 'dotenv'

dotenv.config()

const keycloakAdminClient = new KcAdminClient({
    baseUrl: process.env.BASE_AUTH_URL,
    realmName: process.env.REALM_NAME
})

export default keycloakAdminClient