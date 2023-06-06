const { DataTypes } = require('sequelize');
const { db } = require('./../dataBase/configdb');

const Repair = db.define('repairs', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  Date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending',
  },

  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
module.exports = Repair;
