const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hello!",
    user: "Tony",
    added: new Date().toLocaleString(),
  },
  {
    text: "Hey there!",
    user: "Katie",
    added: new Date().toLocaleString(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    key: process.env.MONGODB_URI,
  });
});

router.post("/new", function (req, res, next) {
  const message = req.body;
  messages.push({
    text: message.message,
    user: message.author,
    added: new Date().toLocaleString(),
  });
  res.redirect("/");
});

module.exports = router;
