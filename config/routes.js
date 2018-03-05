//Update the name of the controller below and rename the file.
const counter = require("../controllers/counter.js")
module.exports = function(app){

  app.get('/', counter.index);

  app.post('/add', counter.add);
  app.use(function(req, res){

    res.send("not found boys");
  })
}
