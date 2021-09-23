import KcAdminClient from '@keycloak/keycloak-admin-client'

require('dotenv').config()

const keycloakAdminClient = new KcAdminClient({
    baseUrl: 'http://localhost:8080/auth',
    realmName: 'master'
})

export default keycloakAdminClient