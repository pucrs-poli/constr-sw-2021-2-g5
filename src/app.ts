import express from "express";
import swaggerUi from "swagger-ui-express"

import { router } from "./routes";

import swaggerDocs from "./swagger.json";

const app = express();  

app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { app };
