const Sequelize = require('sequelize');

const sequelize = new Sequelize('sujeet', 'username', 'Sujeet@10', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
});

module.exports = sequelize;