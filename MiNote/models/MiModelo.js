import db from "../base/MiBase.js";
import { DataTypes } from "sequelize";


const aprendiz = db.define("aprendiz", {
  id_aprendiz: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'id_aprendiz' 
  },
  nombre_aprendiz: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'nombre_aprendiz' 
  },
  password_aprendiz: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'password_aprendiz' 
  },
  email_aprendiz: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'email_aprendiz' 
  }
}, {
  tableName: 'aprendiz',
  timestamps: false 
});



export default aprendiz;
