import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import database from "./config/database";

const app = express();
app.use(bodyParser.json());
app.use("/", routes);
app.database = database;

export default app;