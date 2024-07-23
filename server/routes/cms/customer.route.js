const express = require("express");
const { Cms } = require("../../controllers");
const { errorHandler } = require("../../lib");

const router = express.Router();

router
  .route("/")
  .get(errorHandler(Cms.Customer.index))
  .post(errorHandler(Cms.Customer.store));

router
  .route("/:id")
  .get(errorHandler(Cms.Customer.show))
  .put(errorHandler(Cms.Customer.update))
  .patch(errorHandler(Cms.Customer.update))
  .delete(errorHandler(Cms.Customer.destroy));

module.exports = router;
