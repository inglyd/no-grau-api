import { Sequelize } from 'sequelize';
import db from '../database.js';

export default db.define('formats', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  formato: {
    type: Sequelize.STRING,
    autoIncrement: true,
    allowNull: false,
  },
});
