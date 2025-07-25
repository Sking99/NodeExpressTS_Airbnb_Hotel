import { Sequelize } from "sequelize";
import { dbConfig } from "../../config";

const sequelize = new Sequelize({
    database: dbConfig.DB_NAME,
    dialect: "mysql",
    host: dbConfig.DB_HOST,
    username: dbConfig.DB_USER,
    password: dbConfig.DB_PASSWORD,
    logging: true, // Disable logging
});

export default sequelize;