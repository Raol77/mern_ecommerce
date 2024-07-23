const express = require("express");
const router = express.Router();
const { Front } = require("../../controllers");
const { Profile } = require("../../controllers");
const { auth, customerOnly } = require("../../middleware");
const { errorHandler } = require("../../lib");

router.get("/featured", errorHandler(Front.Product.featured));
router.get("/latest", errorHandler(Front.Product.latest));
router.get("/top-selling", errorHandler(Front.Product.topSelling));
router.get("/:id", errorHandler(Front.Product.byId));
router.get("/:id/similar", errorHandler(Front.Product.similar));
router.post("/:id/review", auth, customerOnly, errorHandler(Profile.addreview));

module.exports = router;
