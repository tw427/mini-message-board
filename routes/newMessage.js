const express = require("express");
const router = express.Router();

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message Form" });
});

module.exports = router;
