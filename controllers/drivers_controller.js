const Driver = require("../models/driver");

module.exports = {
  allDrivers(req, res, next) {
    Driver.find({})
      .then(drivers => res.send(drivers))
      .catch(next);
  },

  greeting(req, res) {
    res.send({ hi: "there" });
  },

  create(req, res, next) {
    const driverProps = req.body;

    Driver.create(driverProps)
      .then(driver => res.send(driver))
      .catch(next);
  },

  edit(req, res, next) {
    const driverId = req.params.id;
    console.log(driverId);
    const driverProps = req.body;

    Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
      .then(() => Driver.findById({ _id: driverId }))
      .then(driver => res.send(driver))
      .catch(next);
  },
  /*edit(req, res, next) {
    const driverId = req.params.id;
    console.log(req.params.id);
    const driverProps = req.body;
    Driver.findByIdAndUpdate(
      driverId,
      {
        $set: driverProps
      },
      {
        new: true
      }
    )
      .then(driver => res.send(driver))
      .catch(err => next(err));
  }*/
  delete(req, res, next) {
    const driverId = req.params.id;
    Driver.findByIdAndRemove({ _id: driverId })
      .then(driver => res.status(204).send(driver))
      .catch(next);
  }
};
