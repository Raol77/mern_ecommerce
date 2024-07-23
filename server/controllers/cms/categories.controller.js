const { showError } = require("../../lib");
const { Category } = require("../../models");

class CategoriesController {
  index = async (req, res, next) => {
    const categories = await Category.find();
    res.json(categories);
  };

  store = async (req, res, next) => {
    const { name, status } = req.body;
    if (!name || !status) {
      return next({
        status: 422,
        message: `Plz enter all field`,
      });
    }
    await Category.create({
      name,
      status,
    });
    res.json({
      success: `Category created`,
    });
  };

  show = async (req, res, next) => {
    const brand = await Category.findById(req.params.id);
    res.json(brand);
    try {
    } catch (error) {
      showError(error, next);
    }
  };

  update = async (req, res, next) => {
    try {
      const { name, status } = req.body;
      if (!name || !status) {
        return next({
          status: 422,
          message: `Plz enter all field`,
        });
      }
      await Category.findByIdAndUpdate(req.params.id, {
        name,
        status,
      });
      res.json({
        success: `Category Updated`,
      });
    } catch (error) {
      showError(error, next);
    }
  };
  destroy = async (req, res, next) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json({
        success: "Category removed",
      });
    } catch (error) {
      showError(error, next);
    }
  };
}

module.exports = new CategoriesController();
