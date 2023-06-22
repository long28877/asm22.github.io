var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  var name = "The Toy Shop";
  res.render("index", { data: name });
});

module.exports = router;
