var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Odin Mini Message Board", messages: messages });
});

router.post("/new", (req, res, next) => {
  const message = req.body.message;
  const name = req.body.name;

  messages.push({
    text: message,
    user: name,
    added: new Date().toLocaleString(),
  });

  res.redirect("/?reload=true");
});

module.exports = router;
