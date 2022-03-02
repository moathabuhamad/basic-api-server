"use strict";

const supertest = require("supertest");
const server = require("../src/server.js");
const { db } = require("../src/models/index.js");
const request = supertest(server.app);

describe("testing server", () => {
  beforeAll(async () => {
    await db.sync();
  });
  afterAll(async () => {
    await db.drop();
  });

  it("testing bad path", async () => {
    const response = await request.get("/xd");
    expect(response.status).toEqual(404);
  });

  it("testing bad method", async () => {
    const response = await request.delete("/food");
    expect(response.status).toEqual(404);
  });

  it("testing GET all data", async () => {
    const response = await request.get("/food");
    expect(response.status).toEqual(200);
  });

  it("testing new data", async () => {
    const response = await request
      .post("/food")
      .send({ name: "pizza", spice: 1 });
    expect(response.status).toEqual(201);
  });

  it("testing readOne", async () => {
    const response = await request.get("/food/1");
    expect(response.status).toEqual(200);
  });
  it("testing update", async () => {
    const response = await request
      .put("/food/1")
      .send({ name: "falafel", spice: "1" });
    expect(response.status).toEqual(200);
  });
  it("testing Delete", async () => {
    const response = await request.delete("/food/1");
    expect(response.status).toEqual(200);
  });
});
