"use strict";

module.exports = function handlerNotfound(req, res, next) {
  return res.status(404).json({ status: 404, error: "URL not found" });
};
