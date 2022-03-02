"use strict";

const loggerTest = require("../src/middleware/logger.js");

describe("logger test", () => {
  let consoleSpy;
  let req = { method: "GET", path: "/clothes" };
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
    console.log(consoleSpy);
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it("testing log", () => {
    loggerTest(req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith(`method: ${req.method}`);
    expect(consoleSpy).toHaveBeenCalledWith(`path: ${req.path}`);
  });

  it("testing next", () => {
    loggerTest(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
