const routerNotFound = (err, _req, res, next) => {
    res.status(err.statusCode).send({ message: err.message });
}

module.exports = { routerNotFound };