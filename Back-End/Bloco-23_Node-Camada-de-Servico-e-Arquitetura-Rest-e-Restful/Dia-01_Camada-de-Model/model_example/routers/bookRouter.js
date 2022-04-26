const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const { getAllBooks, getBookById } = require('../middlewares/getBooks');
const { createBook } = require('../middlewares/createBook');

router.get('/', getAllBooks);

router.get('/:id', getBookById);

router.post('/', createBook);

module.exports = router;
