const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const LocaisReciglagem = require('../app/models/LocaisReciclagem');
const connection = new Sequelize(dbConfig);

LocaisReciglagem.init(connection);

module.exports = connection;