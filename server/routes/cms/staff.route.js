const express = require("express");
const { Cms } = require("../../controllers");
const { errorHandler } = require("../../lib");

const router = express.Router();

router
  .route("/")
  .get(errorHandler(Cms.Staff.index))
  .post(errorHandler(Cms.Staff.store));

router
  .route("/:id")
  .get(errorHandler(Cms.Staff.show))
  .put(errorHandler(Cms.Staff.update))
  .patch(errorHandler(Cms.Staff.update))
  .delete(errorHandler(Cms.Staff.destroy));

module.exports = router;
