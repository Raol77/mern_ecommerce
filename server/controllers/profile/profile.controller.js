const { default: mongoose } = require("mongoose");
const { User, Review, Order, OrderDetail, Product } = require("../../models");
const bcrypt = require("bcryptjs");

class ProfileController {
  detail = async (req, res) => {
    res.json(req.user);
  };
  edit = async (req, res) => {
    const { name, phone, address } = req.body;
    await User.findByIdAndUpdate(req.uid, { name, phone, address });
    res.json({
      success: "Profile Updated",
    });
  };
  password = async (req, res, next) => {
    const { old_password, new_password, confirm_password } = req.body;
    if (bcrypt.compareSync(old_password, req.user.password)) {
      if (new_password === confirm_password) {
        const hash = bcrypt.hashSync(new_password, bcrypt.genSaltSync(10));
        await User.findByIdAndUpdate(req.uid, { password: hash });
        res.json({
          success: "Password Successfully Changed",
        });
      } else {
        next({
          message: "Password Not Confirmed",
          status: 400,
        });
      }
    } else {
      next({
        message: "Password Invalid",
        status: 400,
      });
    }
  };
  addreview = async (req, res) => {
    const { comment, rating } = req.body;
    await Review.create({
      comment,
      rating,
      product_id: req.params.id,
      user_id: req.uid,
    });
    res.json({
      success: "Thank you for your review",
    });
  };
  checkout = async (req, res, next) => {
    const order = await Order.create({ user_id: req.uid });
    for (let item of req.body) {
      const product = await Product.findById(item.product_id);
      const price = product.discounted_price || product.price;
      await OrderDetail.create({
        product_id: item.product_id,
        order_id: order._id,
        qty: item.qty,
        price,
        total: price * item.qty,
      });
    }
    res.json({
      success: "Navigated to checkout page",
    });
  };
  reviews = async (req, res) => {
    const reviews = await Review.aggregate([
      { $match: { user_id: new mongoose.Types.ObjectId(req.uid) } },
      {
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "_id",
          as: "product",
        },
      },
    ]);
    const result = reviews.map(review => {
      return {
        _id: review._id,
        user_id: review.user_id,
        product_id: review.product_id,
        comment: review.comment,
        rating: review.rating,
        createdAt: review.createdAt,
        updatedAt: review.updatedAt,
        product: review.product[0],
        __v: review.__v,
      };
    });
    res.json(result);
  };
  order = async (req, res) => {
    const orders = await Order.find({ user_id: req.uid });
    let result = [];
    for (let order of orders) {
      let details = await OrderDetail.aggregate([
        { $match: { order_id: new mongoose.Types.ObjectId(order._id) } },
        {
          $lookup: {
            from: "products",
            localField: "product_id",
            foreignField: "_id",
            as: "product",
          },
        },
      ]);
      details = details.map(detail => {
        return {
          _id: detail._id,
          order_id: detail.order_id,
          product_id: detail.product_id,
          qty: detail.qty,
          price: detail.price,
          total: detail.total,
          createdAt: detail.createdAt,
          updatedAt: detail.updatedAt,
          product: detail.product[0],
        };
      });
      result.push({
        user_id: order.user_id,
        status: order.status,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        details: details,
      });
    }
    res.json(result);
  };
}

module.exports = new ProfileController();
