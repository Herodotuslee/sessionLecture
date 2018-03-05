const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    if(!req.session.counter){
      req.session.counter = 0;
    }

    if(!req.session.friends){
      req.session.friends = [];
    }

    req.session.counter++;

    req.session.save(()=>{
      res.render("counter", {count: req.session.counter, friends: req.session.friends});
    })
  },
  add: function(req, res){

    req.session.friends.push(req.body.name);

    req.session.save(()=>{
      res.redirect('/')
    })

  }
}
