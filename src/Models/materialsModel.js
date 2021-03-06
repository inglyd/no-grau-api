import { Sequelize } from 'sequelize';
import db from '../database.js';

export default db.define('materials', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  material: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
