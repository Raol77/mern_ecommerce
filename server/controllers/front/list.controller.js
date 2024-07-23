const { Category, Brand } = require("../../models");

class ListController {
  categories = async (req, res, next) => {
    const categories = await Category.find({ status: true });
    res.json(categories);
  };
  categoryById = async (req, res, next) => {
    const category = await Category.findById({
      status: true,
      _id: req.params.id,
    });
    res.json(category);
  };
  brands = async (req, res, next) => {
    const brands = await Brand.find({ status: true });
    res.json(brands);
  };
  brandById = async (req, res, next) => {
    const brand = await Brand.findById({
      status: true,
      _id: req.params.id,
    });
    res.json(brand);
  };
}

module.exports = new ListController();
