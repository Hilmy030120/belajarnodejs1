const db = require('../../models/index');
const category = require('../../models/category');
const getAll = async (req, res) => {
  // untuk mengambil semua data kategori
  const categoryData = await db.Category.findAll(); // mengambil data dari database
  res.send(categoryData); // merespon/mengirim category data
};

const detailCategory = async (req, res) => {
  // menampilkan detail kategori
  const id = req.query.id; // mendapatkan id dari request
  const detailCategory = await db.Category.findOne({
    // mengambil data dari database
    where: { id }, // mencari categori ID
  });
  if (!detailCategory) {
    return res.send('Category tidak ditemukan');
  }
  res.send(detailCategory); // merespon/mengirim detail category
};

const createCategory = async (req, res) => {
  // menambah data baru
  const { name, description, status } = req.body; // mendapatkan request dari body
  const checkCategory = await db.Category.findOne({
    where: { name },
  });
  if (checkCategory) {
    return res.send('Category sudah ada');
  }
  const createUser = await db.Category.create({
    // mengambil data dari database
    name,
    description,
    status,
  });
  res.send(createUser); // merespon/mengirim data baru
};

const editCategory = async (req, res) => {
  // mengedit data category
  const { name, description, status } = req.body; // mendapatkan request dari body
  const checkCategory = await db.User.findOne({
    where: { name },
  });
  if (checkCategory) {
    return res.send('Category sudah ada');
  }
  const id = req.query.id; // mendapatkan id dari request

  const editCategory = await db.Category.update(
    // mengedit data dari database
    {
      name,
      description,
      status,
    },
    { where: { id } } // mencari categori ID
  );
  res.send(editCategory); // merespon edit
};

const deleteCategory = async (req, res) => {
  // menghapus category
  const id = req.query.id; // mendapatkan id dari request

  const deleteCategory = await db.Category.destroy({ where: { id } }); // mengambil data dari database
  if (!deleteCategory) {
    return res.send('category tidak ditemukan');
  }
  res.send({
    // merespon data yg dihapus category
    success: true,
    message: 'success delete',
    id: deleteCategory,
  });
};

module.exports = {
  getAll,
  detailCategory,
  createCategory,
  editCategory,
  deleteCategory,
};
