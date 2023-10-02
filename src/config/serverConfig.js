const dontenv = require("dotenv");

dontenv.config();
const PORT = process.env.PORT;
const FLIGHT_SERVICE_PATH = process.env.FLIGHT_SERVICE_PATH;
module.exports = {
  PORT,
  FLIGHT_SERVICE_PATH,
};
