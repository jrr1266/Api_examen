import { sequelize } from '../DB.js';
import {DataTypes} from 'sequelize';

export const lector = sequelize.define(
  "lector",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
