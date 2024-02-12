import { Sequelize } from "sequelize";

const miDB = new Sequelize("aprendizdb", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default miDB;
