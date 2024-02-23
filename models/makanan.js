'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Makanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      Makanan.belongsTo(models.Category, {
        as: 'category', // nama yang dipanggil di controller
        foreignKey: {
          name: 'category_id', // name kolom asal yang di hubungkan
          allowNull: false, // tidak boleh kosong
          unique: false, // boleh duplicate
          type: DataTypes.INTEGER, // tipe data yang di hubungkan, harus sama dengan tipe data kolom asal yang di hubungkan. Ini karena foreignKey harus integer. Jika tipe data kolom asal yang di hubungkan berbeda dengan tipe
          references: {
            model: 'Category', // nama model yang di hubungkan. Ini karena foreignKey harus integer. Jika tipe data kolom asal yang di hubungkan berbeda dengan tipe data model yang di hubungkan. Ini karena foreignKey harus integer. Jika
            key: 'id', // nama kolom yang di hubungkan. Ini karena foreignKey harus integer. Jika tipe data kolom asal yang di hubungkan berbeda dengan tipe data kolom yang di hubungkan. Ini karena foreignKey har
            as: 'category_id', // nama yang dipanggil di controller
          },
        },
      });

      Makanan.belongsTo(models.User, {
        as: 'namaPemesanan', // nama yang dipanggil di controller
        foreignKey: {
          name: 'namaPemesan', // name kolom asal yang di hubungkan
          allowNull: false, // tidak boleh kosong
          unique: false, // boleh duplicate
          type: DataTypes.INTEGER, // tipe data yang di hubungkan, harus sama dengan tipe data kolom asal yang di hubungkan. Ini karena foreignKey harus integer. Jika tipe data kolom asal yang di hubungkan berbeda dengan tipe
          references: {
            model: 'User', // nama model yang di hubungkan. Ini karena foreignKey harus integer. Jika tipe data kolom asal yang di hubungkan berbeda dengan tipe data model yang di hubungkan. Ini karena foreignKey harus integer. Jika
            key: 'id', // nama kolom yang di hubungkan. Ini karena foreignKey harus integer. Jika tipe data kolom asal yang di hubungkan berbeda dengan tipe data kolom yang di hubungkan. Ini karena foreignKey har
            as: 'namaPemesan', // nama yang dipanggil di controller
          },
        },
      });
    }
  }
  Makanan.init(
    {
      namaPemesan: DataTypes.INTEGER,
      namaMakanan: DataTypes.STRING,
      namaMinuman: DataTypes.STRING,
      harga: DataTypes.INTEGER,
      totalPesanan: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Makanan',
    }
  );
  return Makanan;
};
