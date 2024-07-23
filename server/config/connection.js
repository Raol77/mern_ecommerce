const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Db connected`);
  } catch (error) {
    console.log(` DB Error ${error.message}`);
  }
};

module.exports = connection;
