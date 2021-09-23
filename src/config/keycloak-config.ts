import KcAdminClient from '@keycloak/keycloak-admin-client'

require('dotenv').config()

const keycloakAdminClient = new KcAdminClient({
    baseUrl: 'http://localhost:8080/auth',
    realmName: 'master'
})

export const execute = async () => {
    try {
        await keycloakAdminClient.auth({
            username: 'eduardo',
            password: 'dudu2471',
            grantType: 'password',
            clientId: 'constr-sw-2021-2-g5'
        })
        console.log('Autenticação concluida com exito.')
    } catch (err) {
        console.log(err)
    }

    const user = await keycloakAdminClient.users.find();
    console.log(user)
}

export default { keycloakAdminClient }