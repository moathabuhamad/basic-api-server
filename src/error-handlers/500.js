"use strict";

module.exports = function handlerServer(error,req, res, next) {
  return res.status(500).json({ status: 500, error: error });
};
