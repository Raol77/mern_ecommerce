const showError = (error, next) => {
  next({
    message: `There was problem while executing req ${error}`,
    status: 400,
  });
};

const errorHandler = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(err => {
      return next({
        status: 500,
        message: `Internal error ${err.message}`,
      });
    });
  };
};

module.exports = {
  errorHandler,
  showError,
};
