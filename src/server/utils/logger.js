import bunyan from "bunyan";

const logger = bunyan.createLogger({
  name: "Travelogue",
  streams: [
    {
      level: "debug",
      stream: process.stdout
    },
    {
      type: "rotating-file",
      level: "info",
      path: "log/travelogue-debug.log",
      period: "1d", // daily rotation
      count: 10 // keep 10 back copies
    },
    {
      type: "rotating-file",
      level: "error",
      path: "log/travelogue-error.log",
      period: "1d", // daily rotation
      count: 10 // keep 10 back copies
    }
  ]
});

export default logger;
