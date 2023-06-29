import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../DB.js';
import { libro } from './libro.models.js';
import { lector } from "./lector.models.js";
export const prestamo = sequelize.define(
  "prestamo",
  {
    date: {
      type: DataTypes.DATE,
      defaultValue: Date.now,
    },
    libroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: libro, 
        key: "id", 
      },
    },
    lectorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: lector, 
        key: "id", 
      },
    },
  },
  {
    timestamps: false,
  }
);

libro.hasOne(prestamo, { 
  foreignKey: "libroId"
});
prestamo.belongsTo(libro, { 
  foreignKey: "libroId" 
});

lector.hasMany(prestamo, { 
  foreignKey: "lectorId"

});
prestamo.belongsTo(lector, {
  foreignKey: "lectorId"
});