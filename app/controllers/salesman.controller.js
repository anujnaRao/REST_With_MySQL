const Salesman = require("../models/salesman.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const salesman = new Salesman({
      name: req.body.name,
      id: req.body.id
    });
  
    // Save Customer in the database
    Salesman.create(salesman, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Salesman."
        });
      else res.send(data);
    });
  };
  
  // Retrieve all Customers from the database.
  exports.findAll = (req, res) => {
    Salesman.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving salesman."
        });
      else res.send(data);
    });
  };
  