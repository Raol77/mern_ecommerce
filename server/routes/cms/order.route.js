const express = require("express");
const router = express.Router();
const { errorHandler } = require("../../lib");

const { Cms } = require("../../controllers");

router.route("/").get(errorHandler(Cms.Order.index));

router
  .route("/:id")
  .put(errorHandler(Cms.Order.update))
  .patch(errorHandler(Cms.Order.update))
  .delete(errorHandler(Cms.Order.destroy));

module.exports = router;
