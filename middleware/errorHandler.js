const { logEvents } = require("./logger");

const errorHandler = (err, res, req, next) => {
  logEvents(
    `${err.name}:${err.message}\t${req.method}\t{req.url}\t${req.headers.origin}\n`,
    "errLog.log"
  );

  const status = req.statusCode ? req.statusCode : 500; // Server Error

  req.status(status);

  req.json({ message: err.message });
};

module.exports = errorHandler;
