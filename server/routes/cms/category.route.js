const express = require("express");
const { Cms } = require("../../controllers");
const { errorHandler } = require("../../lib");

const router = express.Router();

router
  .route("/")
  .get(errorHandler(Cms.Category.index))
  .post(errorHandler(Cms.Category.store));

router
  .route("/:id")
  .get(errorHandler(Cms.Category.show))
  .put(errorHandler(Cms.Category.update))
  .patch(errorHandler(Cms.Category.update))
  .delete(errorHandler(Cms.Category.destroy));

module.exports = router;
