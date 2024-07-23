const express = require("express");
const { config } = require("dotenv");
const connection = require("./config/connection");
const routes = require("./routes");
const cors = require("cors");
const app = express();
config();
connection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || `There was some error`,
  });
});

const listener = app.listen(process.env.API_PORT, process.env.API_HOST, () => {
  console.log(
    `SErver is running at ${listener.address().address}: ${
      listener.address().port
    }`
  );
});
