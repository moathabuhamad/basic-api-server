"use strict";

function food(sequelize, DataTypes) {
  return sequelize.define("food", {
    name: { type: DataTypes.STRING },
    spice: { type: DataTypes.BOOLEAN },
  });
}

module.exports = food;