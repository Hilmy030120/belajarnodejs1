'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Makanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Makanan.init({
    namaPemesan: DataTypes.STRING,
    namaMakanan: DataTypes.STRING,
    namaMinuman: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    totalPesanan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Makanan',
  });
  return Makanan;
};