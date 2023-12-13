const express = require("express");
const { createTweet } = require("../controller/tweet.controller");
const router = express.Router();

router.post("/create", createTweet);

module.exports = router;
