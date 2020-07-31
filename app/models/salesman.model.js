const sql = require("./db.js");

const Salesman = function(salesman) {
    this.name = salesman.name;
    this.id = salesman.id;
  };
  
  Salesman.create = (newSalesman, result) => {
    sql.query("INSERT INTO salesman SET ?", newSalesman, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created salesman: ", { id: res.insertId, ...newSalesman });
      result(null, { id: res.insertId, ...newSalesman });
    });
  };
  
  Salesman.findById = (salesmanId, result) => {
    sql.query(`SELECT * FROM salesman WHERE id = ${customerId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found salesman: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };

  module.exports = Salesman;