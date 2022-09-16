import { Sequelize } from 'sequelize';


const db = new Sequelize('nodejs', 'root', 'magento', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;
