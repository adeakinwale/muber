const DriversController = require("../controllers/drivers_controller");

module.exports = app => {
  //app is received an an arg in this function

  app.get("/api/all/drivers", DriversController.allDrivers);
  app.get("/api/drivers", DriversController.greeting);
  app.post("/api/drivers", DriversController.create);
  app.put("/api/drivers/:id", DriversController.edit);
  app.delete("/api/drivers/:id", DriversController.delete);
  //app.get('/api/drivers', DriversController.index);
};
