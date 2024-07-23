const express = require("express");
const router = express.Router();
const { Front } = require("../../controllers");
const { errorHandler } = require("../../lib");

router.get("/category", errorHandler(Front.List.categories));
router.get("/category/:id", errorHandler(Front.List.categoryById));
router.get("/category/:id/products", errorHandler(Front.Product.byCategoryId));

router.get("/brand", errorHandler(Front.List.brands));
router.get("/brand/:id", errorHandler(Front.List.brandById));
router.get("/brand/:id/products", errorHandler(Front.Product.byBrandId));
router.get("/search", errorHandler(Front.Product.search));

module.exports = router;
