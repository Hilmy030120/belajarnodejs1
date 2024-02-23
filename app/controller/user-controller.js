const bcrypt = require('bcrypt');
const db = require('../../models/index');
const getAll = async (req, res) => {
  const userData = await db.User.findAll();
  res.send(userData);
};

const getMakanan = async (req, res) => {
  const userMakanan = await db.Makanan.findAll();
  res.send(userMakanan);
};

const detailUser = async (req, res) => {
  const id = req.query.id;
  const detailUser = await db.User.findOne({
    where: { id },
  });
  res.send(detailUser);
};

const createUser = async (req, res) => {
  const { name, email, password, adress } = req.body;
  const encryptPassword = await bcrypt.hashSync(password, 10);
  const createUser = await db.User.create({
    name,
    email,
    password: encryptPassword,
    adress,
  });
  res.send(createUser);
};

const editUser = async (req, res) => {
  const { name, email, password, adress } = req.body;
  const id = req.query.id;

  const editUser = await db.User.update(
    {
      name: name,
      email: email,
      password: password,
      adress,
    },
    { where: { id } }
  );
  res.send(editUser);
};

const deleteUser = async (req, res) => {
  const id = req.query.id;

  const deleteUser = await db.User.destroy({ where: { id } });
  res.send({
    success: true,
    message: 'success delete',
    id: deleteUser,
  });
};

const detailMakanan = async (req, res) => {
  const id = req.query.id;
  const detailMakanan = await db.Makanan.findOne({
    where: { id },
  });
  res.send(detailMakanan);
};

const createMakanan = async (req, res) => {
  const { namaPemesan, namaMakanan, namaMinuman, harga, totalPesanan } = req.body;
  const createMakanan = await db.Makanan.create({
    namaPemesan,
    namaMakanan,
    namaMinuman,
    harga,
    totalPesanan,
  });
  res.send(createMakanan);
};

const editMakanan = async (req, res) => {
  const { namaPemesan, namaMakanan, namaMinuman, harga, totalPesanan } = req.body;
  const id = req.query.id;

  const editMakanan = await db.Makanan.update(
    {
      namaPemesan,
      namaMakanan,
      namaMinuman,
      harga,
      totalPesanan,
    },
    { where: { id } }
  );
  res.send(editMakanan);
};

const deleteMakanan = async (req, res) => {
  const id = req.query.id;

  const deleteMakanan = await db.Makanan.destroy({ where: { id } });
  res.send({
    success: true,
    message: 'success delete',
    id: deleteMakanan,
  });
};

module.exports = {
  getAll,
  detailUser,
  createUser,
  editUser,
  deleteUser,
  getMakanan,
  detailMakanan,
  createMakanan,
  editMakanan,
  deleteMakanan,
};
