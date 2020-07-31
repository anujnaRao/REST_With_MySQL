module.exports = app => {
    const salesmans = require("../controllers/salesman.controller.js");

    // Create a new Customer
    app.post("/salesmans", salesmans.create);

    // Retrieve all Customers
    app.get("/salesmans", salesmans.findAll);

};