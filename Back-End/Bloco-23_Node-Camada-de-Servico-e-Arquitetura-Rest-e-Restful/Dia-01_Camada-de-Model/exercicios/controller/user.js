const userModel = require('../models/user');

const createUser = async (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  
  await userModel.createUser(first_name, last_name, email, password);

  const listUsers = await userModel.getAllUsers();

  const createdUser = listUsers[listUsers.length - 1];

  return res.status(201).json(createdUser);
};

const getAllUsers = async (req, res, next) => {
  const listUsers = await userModel.getAllUsers();

  return res.status(200).json(listUsers);
}

const getUserById = async (req, res, next) => {
  const { id } = req.params;

  const listUsers = await userModel.getAllUsers();

  const filteredUser =  listUsers.findIndex((user) => user.id === parseInt(id));

  if (filteredUser === -1) return res.status(404).json({ message: 'User Not Found' });

  return res.status(200).json(listUsers[filteredUser]);
}

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;

  const allUsers = await userModel.getAllUsers();

  const findIndex = allUsers.findIndex((user) => user.id === parseInt(id));

  if (findIndex === -1) return res.status(404).json({ message: 'User Not Found' });

  const updateUser = {id, firstName: first_name, lastName: last_name, email, password}

  await userModel.updateUser(updateUser);

  return res.status(200).json(updateUser);
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
}