const knex = require("../db/knex.js");

module.exports = {
  index: (req, res)=>{
    if(!req.session.count){
      req.session.count = 0;
    }
    req.session.count ++;
    req.session.save(()=>{
      res.render("counter", {count: req.session.count,friends:req.session.friends});
    })
  },
  addFriend: (req, res)=>{

    req.session.friends.push(req.body.name);
    req.session.save(()=>{
      res.redirect("/")
    })

  }
}
