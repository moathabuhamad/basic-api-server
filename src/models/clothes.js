"use strict";

function clothes(sequelize, DataTypes) {
  return sequelize.define("clothes", {
    type: { type: DataTypes.STRING },
    color: { type: DataTypes.STRING },
  });
}

module.exports = clothes;