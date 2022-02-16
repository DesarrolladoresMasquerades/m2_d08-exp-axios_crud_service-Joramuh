module.exports = (app) => {
  // Base URLS
  app.use("/", require("./base.routes.js"));
  app.use("/characters", require("./characters.routes.js"));
};
