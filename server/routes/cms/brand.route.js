const express = require("express");
const { Cms } = require("../../controllers");
const { errorHandler } = require("../../lib");

const router = express.Router();

router
  .route("/")
  .get(errorHandler(Cms.Brand.index))
  .post(errorHandler(Cms.Brand.store));

router
  .route("/:id")
  .get(errorHandler(Cms.Brand.show))
  .put(errorHandler(Cms.Brand.update))
  .patch(errorHandler(Cms.Brand.update))
  .delete(errorHandler(Cms.Brand.destroy));

module.exports = router;
