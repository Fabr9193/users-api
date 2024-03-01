import { Sequelize } from 'sequelize';
const env = process.env.NODE_ENV || 'development';
const config = require('./src/infrastructure/database/config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
});

export default sequelize;