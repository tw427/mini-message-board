const express = require("express");
const router = express.Router();

router.get("/new", function (req, res, next) {
  res.send("New message!");
});

module.exports = router;
