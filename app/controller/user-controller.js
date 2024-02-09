const getAll = (req, res) => {
  console.log('Hello world');
};

const detailUser = (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  res.send({
    id,
    name,
  });
};

const createUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send({
    name,
    email,
  });
};

const editUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const userData = {
    name,
    email,
  };
  res.send({
    userData,
  });
};

module.exports = {
  getAll,
  detailUser,
  createUser,
  editUser,
};
