import { Sequelize } from 'sequelize';
import db from '../database.js';

export default db.define('formats', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  format: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
