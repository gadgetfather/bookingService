const express = require("express");
const { PORT } = require("./config/serverConfig");
const db = require("./models");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", require("./routes"));
const prepareAndStartServer = async () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true }).then(() => {
        console.log("Drop and re-sync db.");
      });
    }
  });
};

prepareAndStartServer();
