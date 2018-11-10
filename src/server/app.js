"use strict";

/*
 * This file exports the app that is used by the server to expose the routes.
 * And make the routes visible.
*/

import express from "express";
import requestLogger from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";
// import routes from "./api/routes";
import connect from "./db";

// Express App
const app = express();
// Setup DB Connection
connect();

// Use Helmet
app.use(helmet());

// Use default logger for now
app.use(requestLogger("dev"));

// Add Cors
app.use(cors());

// Body Parser and Cookie Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// This is to check if the service is online or not
app.use("/ping", function(req, res) {
  res.json({ reply: "pong" });
  res.end();
});

// Mount the Routes
// app.use("/v1", routes);
// app.use("/documentation", express.static("docs"));

app.use(function(err, req, res, next) {
  res.status(400).json(err);
  next();
});

// Export the express app instance
export default app;
