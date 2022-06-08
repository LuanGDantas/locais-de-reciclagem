const { Model, DataTypes } = require('sequelize');

class LocaisReciclagem extends Model {
  static init(sequelize) {
    super.init({
      LocalReciclagem_Id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      Identificacao: {
        type: DataTypes.STRING(100),
        unique: true
      },
      CEP: DataTypes.STRING(10),
      Logradouro: DataTypes.STRING(100),
      NumeroEndereco: DataTypes.STRING(10),
      Complemento: DataTypes.STRING(30),
      Bairro: DataTypes.STRING(50),
      Cidade: DataTypes.STRING(50),
      Capacidade: DataTypes.FLOAT,
    },{
      sequelize,
      tableName: 'LocaisReciclagem',
    })
     return this
  }
}

module.exports = LocaisReciclagem;