const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
  const userData = await User.findByPk(req.params.id).catch((err) =>
    res.status(200).json(err));
   } catch (err) {
  res.status(404).json(userData)
   ;
  }
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
