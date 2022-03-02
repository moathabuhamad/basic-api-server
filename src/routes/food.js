"use strict";

const { Food } = require("../models/index.js");
const express = require("express");
const router = express.Router();
console.log(Food);
router.post("/food", addFood);
router.get("/food/:id", readFood);
router.get("/food", readAllFood);
router.put("/food/:id", updateFood);
router.delete("/food/:id", deleteFood);

async function addFood(req, res) {
  let addedFood = await Food.create(req.body);
  res.status(201).json(addedFood);
}

async function readFood(req, res) {
  let id = req.params.id;
  res.status(200).json(await Food.findOne({ where: { id: id } }));
}

async function readAllFood(req, res) {
  res.status(200).json(await Food.findAll());
}

async function updateFood(req, res) {
  let id = req.params.id;
  await Food.update(req.body, { where: { id: id } });
  res.status(200).json(await Food.findOne({ where: { id: id } }));
}

async function deleteFood(req, res) {
  let id = req.params.id;
  await Food.destroy({ where: { id: id } });
  res.status(200).json(await Food.findOne({ where: { id: id } }));
}
module.exports = router;