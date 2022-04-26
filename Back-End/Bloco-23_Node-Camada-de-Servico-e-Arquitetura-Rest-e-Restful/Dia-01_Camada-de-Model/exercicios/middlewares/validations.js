const validations = (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;

  if (!first_name || !last_name || !email || !password) return res.status(400).json({ error: 'True', message: 'Invalid Data' });

  next();
}

const validPassword = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) return res.status(400).json({ error: 'True', message: 'The password need to have more 6 caracters' });

  next();
}

module.exports = {
  validations,
  validPassword,
};
