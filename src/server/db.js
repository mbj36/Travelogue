// Bring Mongoose into the app
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import logger from "./utils/logger";

// Build the connection string
const dbURI = process.env.MONGOURI ||
  "mongodb://vijay:travelogue123@ds159293.mlab.com:59293/travelogue";

function connect() {
  // Create the database connection
  mongoose.connect(
    dbURI,
    { useNewUrlParser: true },
    err => {
      if (err) {
        logger.info("DB Error: ", err);
        throw err;
      } else {
        logger.info(dbURI);
        logger.info("MongoDB Connected");
      }
    }
  );

  // CONNECTION EVENTS
  // When successfully connected
  mongoose.connection.on("connected", function() {
    logger.info("Mongoose default connection open to " + dbURI);
  });

  // If the connection throws an error
  mongoose.connection.on("error", function(err) {
    logger.info("Mongoose default connection error: " + err);
  });

  // When the connection is disconnected
  mongoose.connection.on("disconnected", function() {
    logger.info("Mongoose default connection disconnected");
  });

  // If the Node process ends, close the Mongoose connection
  process.on("SIGINT", function() {
    mongoose.connection.close(function() {
      logger.info(
        "Mongoose default connection disconnected through app termination"
      );
      throw new Error(
        "Mongoose default connection disconnected through app termination"
      );
    });
  });
}

export default connect;
