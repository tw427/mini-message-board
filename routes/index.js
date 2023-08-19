const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hello!",
    user: "Tony",
    added: new Date(),
  },
  {
    text: "Hey there!",
    user: "Katie",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
