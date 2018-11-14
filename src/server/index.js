"use strict";

/*
 * This file handles the configuration of the server
*/

import dotenv from "dotenv";
import app from "./app"; // Recieved an express app instance
import logger from "./utils/logger";

dotenv.config();

// Here you set the PORT and IP of the server
const port = process.env.PORT || 4000;
const ip = process.env.IP || "127.0.0.1";

app.listen(port, ip, function(error) {
  if (error) {
    logger.error("Unable to listen for connections", error);
    throw error;
  }
  logger.info(`Server on http://${ip}:${port}`);
});
