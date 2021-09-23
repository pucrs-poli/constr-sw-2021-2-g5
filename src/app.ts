import express from 'express'
import { execute } from './config/keycloak-config'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

execute()

export { app }