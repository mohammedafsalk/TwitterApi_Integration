const express = require("express");
const { redirect } = require("../controller/auth.controller");
const router = express.Router();

router.get("/twitter/callback", redirect);


module.exports = router;
