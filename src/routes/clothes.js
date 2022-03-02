"use strict";

const { Clothes } = require("../models/index.js");
const express = require("express");
const router = express.Router();
console.log(Clothes);
router.post("/clothes", addCloth);
router.get("/clothes/:id", readCloth);
router.get("/clothes", readAllCloth);
router.put("/clothes/:id", updateCloth);
router.delete("/clothes/:id", deleteCloth);

async function addCloth(req, res) {
  let addedClothes = await Clothes.create(req.body);
  res.status(201).json(addedClothes);
}

async function readCloth(req, res) {
  let id = req.params.id;
  res.status(200).json(await Clothes.findOne({ where: { id: id } }));
}

async function readAllCloth(req, res) {
  res.status(200).json(await Clothes.findAll());
}

async function updateCloth(req, res) {
  let id = req.params.id;
  await Clothes.update(req.body, { where: { id: id } });
  res.status(200).json(await Clothes.findOne({ where: { id: id } }));
}

async function deleteCloth(req, res) {
  let id = req.params.id;
  await Clothes.destroy({ where: { id: id } });
  res.status(200).json(await Clothes.findOne({ where: { id: id } }));
}

module.exports = router;
