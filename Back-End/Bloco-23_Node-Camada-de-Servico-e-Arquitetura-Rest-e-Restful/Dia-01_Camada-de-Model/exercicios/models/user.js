const connection = require('./connection');

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  lastName: authorData.last_name,
  email: authorData.email,
  password: authorData.password,
});

const getAllUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM users_crud.users;');

  return users.map(serialize);
}

const createUser = async (firstName, lastName, email, password) => {
  await connection.execute('INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);',
  [firstName, lastName, email, password],
)};

const updateUser = async (user) => {
  await connection.execute(
    `UPDATE
      users_crud.users
    SET
      first_name = ?,
      last_name = ?,
      email = ?,
      password = ?
    WHERE
      id = ?`,
    [user.firstName, user.lastName, user.email, user.password, user.id],
  );
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
};
