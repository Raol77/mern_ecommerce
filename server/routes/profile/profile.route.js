const express = require("express");
const router = express.Router();
const { Profile } = require("../../controllers");
const { auth, customerOnly } = require("../../middleware");
const { errorHandler } = require("../../lib");

router.get("/detail", errorHandler(Profile.detail));
router.patch("/edit-profile", errorHandler(Profile.edit));
router.patch("/change-password", errorHandler(Profile.password));
router.get("/reviews", auth, customerOnly, errorHandler(Profile.reviews));
router.get("/orders", auth, customerOnly, errorHandler(Profile.order));
router.post("/checkout", auth, customerOnly, errorHandler(Profile.checkout));

module.exports = router;
