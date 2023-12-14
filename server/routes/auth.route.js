const express = require("express");
const { redirect, logout } = require("../controller/auth.controller");
const router = express.Router();

router.get("/twitter/callback", redirect);
router.post("/logout",logout)


module.exports = router;
