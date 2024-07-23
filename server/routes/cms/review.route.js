const express = require("express");
const { Cms } = require("../../controllers");
const { errorHandler } = require("../../lib");

const router = express.Router();

router.route("/").get(errorHandler(Cms.Review.index));

router.route("/:id").delete(errorHandler(Cms.Review.destroy));

module.exports = router;
