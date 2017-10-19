const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    if(!req.session.counter){
      req.session.counter = 0;
    }

    req.session.counter++;
    res.render("counter", {count: req.session.counter});
  }
}
