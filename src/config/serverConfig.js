const dontenv = require("dotenv");

dontenv.config();
const PORT = process.env.PORT;
module.exports = {
  PORT,
};
