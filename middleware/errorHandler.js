const { logEvents } = require("./logger");

const errorHandler = (err, req, res, next) => {
  logEvents(
    `${err.name}:${err.message}\t${req.method}\t${req.url}\n`,
    "errLog.log"
  );

  const status = res.statusCode ? res.statusCode : 500; // Server Error

  res.status(status).json({ message: err.message });
};

module.exports = errorHandler;
