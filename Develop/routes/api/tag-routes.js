const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
  // find all tags
  router.get('/', async (req, res) => {
    try {
      // find all library cards and perform a JOIN to include all associated Readers
      const userData = await Tag.findAll({
        include: [{ model: Product }],
      });
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const userData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!userData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const userData = await Tag.create({
  
      product_id: req.body.product_id, //should this be category_id?
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  try {
    const libraryCardData = await LibraryCard.destroy({
      where: {
        id: req.params.id,
      },
  // delete on tag by its `id` value
});

module.exports = router;
