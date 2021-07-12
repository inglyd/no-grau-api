import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("colors", {
colorsId: {
  type: Sequelize.INTEGER.UNSIGNED,
  allowNull: false,
  references: {         
    model: 'colorsModel',
    key: 'id'
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}});
