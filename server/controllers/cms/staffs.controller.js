const { User } = require("../../models");
const bcrypt = require("bcryptjs");

class StaffsController {
  index = async (req, res, next) => {
    const staffs = await User.find({ type: "Staff" });
    res.json(staffs);
  };

  store = async (req, res, next) => {
    const { name, address, phone, email, password, confirm_password, status } =
      req.body;
    if (
      !name ||
      !address ||
      !phone ||
      !email ||
      !password ||
      !confirm_password
    ) {
      return next({
        status: 422,
        message: `Plz enter all field`,
      });
    }
    if (await User.findOne({ email })) {
      next({
        status: 400,
        message: "Email Already Exist",
      });
    } else {
      if (password === confirm_password) {
        const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        await User.create({
          name,
          address,
          phone,
          email,
          password: hash,
          status,
          type: "Staff",
        });
        res.json({
          success: `Staff created`,
        });
      } else {
        next({
          status: 409,
          message: `Password doesnot match`,
        });
      }
    }
  };

  show = async (req, res, next) => {
    const staff = await User.findById(req.params.id);
    res.json(staff);
  };

  update = async (req, res, next) => {
    const { name, address, phone, status } = req.body;
    if (!name || !address || !phone) {
      return next({
        status: 422,
        message: `Plz enter all field`,
      });
    }
    await User.findByIdAndUpdate(req.params.id, {
      name,
      address,
      phone,
      status,
    });
    res.json({
      success: `Staff Updated`,
    });
  };
  destroy = async (req, res, next) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({
      success: "staff removed",
    });
  };
}

module.exports = new StaffsController();
