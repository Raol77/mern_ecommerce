const { showError } = require("../../lib");
const { Review } = require("../../models");

class ReviewController {
  index = async (req, res, next) => {
    const reviews = await Review.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "user",
        },
      },
    ]);
    const result = reviews.map(review => {
      return {
        _id: review._id,
        product_id: review.product_id,
        user_id: review.user_id,
        comment: review.comment,
        rating: review.rating,
        product: review.product[0],
        user: review.user[0],
      };
    });
    res.json(result);
  };

  destroy = async (req, res, next) => {
    await Review.findByIdAndDelete(req.params.id);
    res.json({
      success: "REview deleted successfully",
    });
  };
}

module.exports = new ReviewController();
