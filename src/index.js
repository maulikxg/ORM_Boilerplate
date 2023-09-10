const express = require("express");
const { ServerConfig ,Logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.portport, () => {
  console.log(`App listening on port ${ServerConfig.port}`);
  Logger.info("Successfully started server" , "" , {})
});
