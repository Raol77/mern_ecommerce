const express = require("express");
const { Auth } = require("../../controllers");
const { errorHandler } = require("../../lib");

const router = express.Router();

router.post("/register", errorHandler(Auth.register));
router.post("/login", errorHandler(Auth.login));

module.exports = router;
