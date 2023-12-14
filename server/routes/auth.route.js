const express = require("express");
const { redirect, logout } = require("../controller/auth.controller");
const router = express.Router();

router.get("/twitter/callback", redirect);
router.get("/sample", (req, res,) => {
  res.send("ok");
});
router.post("/logout", logout);

module.exports = router;
