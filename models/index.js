const path = require('path');
const Sequelize = require('sequelize');

// const config = require('../config/'config.json')['development']

const sequelize = new Sequelize('seque', 'root', 'password', { //database, user, password, { etc }
  host : '127.0.0.1',
  dialect : 'mysql',
})

const db = {};

db.Sequelize = Sequelize // 시퀄라이즈
db.sequelize = sequelize // 시퀄라이즈 인스탄스

db.User = require('./user')(sequelize, Sequelize)

module.exports = db
